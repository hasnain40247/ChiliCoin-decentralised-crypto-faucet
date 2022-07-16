import React, { useState } from "react";
import {Principal} from "@dfinity/principal"
import {token} from "../../../declarations/token"
import {BiCoin}from "react-icons/bi";

import { async } from "q";
function Balance() {

const  [inputValue,setInputValue]= useState("")
const  [balance,setbalance]= useState("0")
const  [symbol,setsymbol]= useState("")
const  [hidden,sethidden]= useState(1)





  
const handleClick=async ()=>{
    console.log("Balance Button Clicked");
    const principal=Principal.fromText(inputValue)
    const balanceR=await token.balanceOf(principal)
    setsymbol(await token.getSymbol())

    setbalance(balanceR.toLocaleString())
    sethidden(0)
  }

  return (
    <div className="balance">
   <div className="balanceText">
   <h2 style={{
    color:"#ff5251",
    marginRight:"5px"
   }}><BiCoin/> </h2>
   <h2>  Account Balance</h2>
   </div>
      
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={(e)=>{
setInputValue(e.target.value)
          }}
        />
      
      <p className="trade-buttons">
        <button
          id="btn-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
   {hidden === 1? <p></p>:    <p>This account has a balance of {balance} {symbol}.</p>}
    </div>
  );
}

export default Balance;
