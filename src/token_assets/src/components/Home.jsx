import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Section from "./Section"
import TransactionSection from "./TransactionSection"
import TransferSection from "./TransferSection"

const Home=()=>{
return(<><Navbar to={"/about"}/>
      <Section/>
      <TransactionSection/>
      <TransferSection/>
<Footer/></> 
)
}
export default Home