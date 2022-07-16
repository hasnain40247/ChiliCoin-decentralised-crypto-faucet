import React from "react"
import Balance from "./Balance"
import Faucet from "./Faucet"
import Header from "./Header"
import ScrollIndicator from "./ScrollIndicator"


const TransactionSection=()=>{
return(
    <div id="transactions" className="transactionSection">

<div className="introdiv" > 
   
      <Header />
      </div>

      <Faucet />
      <Balance />
      <ScrollIndicator />


    </div>
)
}

export default TransactionSection