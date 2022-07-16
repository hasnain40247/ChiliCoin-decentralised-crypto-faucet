import React, { useState } from "react";
import {token} from "../../../declarations/token"
import {Principal} from "@dfinity/principal"
import { setTextRange } from "../../../../node_modules/typescript/lib/typescript";
import { BiTransferAlt } from "react-icons/bi";

function Transfer() {
  const [to,setTo]=useState("")
  const [textb, setText]= useState("Transfer")
  const [disabled,setDisabled]=  useState(0)
  const [amount,setamount]=useState(0)

  async function handleClick() {
    setDisabled(1)
    await token.transfer(Principal.fromText(to), Number(amount))
    setText("Transferred!")
    setTimeout(()=>{
      setDisabled(0)
    setText("Transfer")
    },3000)
    setTo("")
    setamount(0)


  }

  return (
 
      <div className="transfer">

        <h1 >Transfer CHILI.</h1>
       
           <div className="accbox" style={{
            
 display:"flex",
 flexDirection:"row",
 alignItems:"center"   ,
 justifyContent:"space-between"  ,
 width:"100%"      
           }}>

         <div  style={{
           display:"flex",
           flexDirection:"column",
 alignItems:"center"   ,
 margin:"0px 8px"

      
         }}>
              <h3>Principal ID</h3>

         <input
              className="transferInput"
                type="text"
                id="transfer-to-id"
                placeholder="Principal Identity"
                value={to}
                onChange={(e)=>{
                  setTo(e.target.value)
                }}
              />
         </div>
           
         <BiTransferAlt className="tricon" style={{
          fontSize:"2.5rem"}}/>
        
     <div
         style={{
 margin:"0px 8px",

          display:"flex",
          flexDirection:"column",
 alignItems:"center"   ,

     
        }}
     >
              <h3>Transfer Amount</h3>

 <input
              className="transferInput"

                type="number"
                id="amount"
                value={amount}
                onChange={(e)=>{
                  setamount(e.target.value)
                }}

              />
     </div>
             
           </div>
         
        <p className="trade-buttons">
          
          <button id="btn-transfer"
          disabled={disabled==0? false:true}
          onClick={handleClick} >
{textb}
          </button>
        </p>
      </div>
    
  );
}

export default Transfer;
