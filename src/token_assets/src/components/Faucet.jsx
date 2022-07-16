import React, { useState } from "react";
import { AuthClient } from "@dfinity/auth-client";
import {token, canisterId,createActor} from "../../../declarations/token"
import { GiChiliPepper} from "react-icons/gi";

function Faucet() {
  const [disabled,SetDisabled]= useState(0)
  const [restext,Settext]= useState("Gimme gimme")
 



  async function handleClick(event) {
  SetDisabled(1)

  const authClient=await AuthClient.create()
  const identity=await authClient.getIdentity()

  const authenticatedCanister=createActor(canisterId,{
    agentOptions:{
      identity
    }
  })

const res=await authenticatedCanister.payOut()
Settext(res)
if(res== "Insufficient Funds"){
  SetDisabled(0)

}


  }

  return (
    <div className="faucet">
      <h2 style={{
            fontFamily: 'Rokkitt'

      }}><GiChiliPepper style={{
        color:"#ff5251"
      }}/> Chili Faucet
      </h2>
      <p style={{
         fontFamily: 'Rokkitt',
         textAlign:"center"
      }}>Claim your 10,000 CHILI coins! ( <span><img src="dfinity.png" height={15} width={20}/></span> DFINITY Registration Required )</p>
      <p className="trade-buttons">
        <button id="btn-payout" disabled={disabled===0? false:true} onClick={handleClick}>
       {restext}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
