import Debug "mo:base/Debug";
import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Iter "mo:base/Iter";

actor Token{
    Debug.print("hello");
    var owner: Principal= Principal.fromText("ff4ma-fd5jq-cffhh-lkw5s-ekr5y-kpcfl-d4fvk-eytgk-jwwuu-kvz5k-2qe");
    var totalSupply: Nat= 1000000000;
    var symbol:Text="CHILI";
private stable var balanceEntries: [(Principal,Nat)]=[];

   private var balances=HashMap.HashMap<Principal, Nat>(1,Principal.equal, Principal.hash);

   if(balances.size() < 1){
    balances.put(owner, totalSupply);

};


public query func balanceOf(who: Principal): async Nat{
    let balance: Nat=switch (balances.get(who)){
        case null 0;
        case (?result) result;
    };

    return balance;
 
};
public query func getSymbol(): async Text{
  
    return symbol;
 
};
public shared(msg) func payOut():async Text{
    Debug.print(debug_show(msg.caller));
   if(balances.get(msg.caller) == null){
     let amount=10000;
    let result=await transfer(msg.caller,amount);
    return  result;
   }
   else{
    return "Already Claimed!"
   }
};

public shared(msg) func transfer(to: Principal, amount: Nat): async Text{
    Debug.print(debug_show(msg.caller));
    var balanceFrom=await balanceOf(msg.caller);
    if( balanceFrom > amount){
        let newBal: Nat= balanceFrom-amount;
        balances.put(msg.caller,newBal);

    let balanceTo=await balanceOf(to);

         let newToBal: Nat= balanceTo+amount;
        balances.put(to,newToBal);
        return "Success";
    }
    else{
        return "Insufficient Funds";
    }
};

system func preupgrade(){
balanceEntries := Iter.toArray(balances.entries());
};

system func postupgrade(){
balances := HashMap.fromIter<Principal, Nat>(balanceEntries.vals(),1, Principal.equal,Principal.hash);
if(balances.size() < 1){
    balances.put(owner, totalSupply);

}
}
};