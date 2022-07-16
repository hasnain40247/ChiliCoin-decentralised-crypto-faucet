import React from "react"
import Balance from "./Balance"
import Faucet from "./Faucet"
import Header from "./Header"
import ScrollIndicator from "./ScrollIndicator"
import Transfer from "./Transfer"


const TransferSection=()=>{
    return(
        <div id="transfer" className="transferSection">
    
    <div className="introdiv coin"style={{
        justifyContent:"flex-start"
    }} > 
    <img src="token.png" height={55} width={55}/>
          </div>
    
        
         <Transfer />
    
       
    
    
        </div>
    )
}

export default TransferSection