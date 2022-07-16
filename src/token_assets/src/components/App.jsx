import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate ,
Routes,
  Route,
  
} from "react-router-dom";
import Faucet from "./Faucet";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import InfoSection from "./InfoSection";

import Navbar from "./Navbar";
import Section from "./Section";
import TransactionSection from "./TransactionSection";
import TransferSection from "./TransferSection";


function App() {

 

  return (
    <>
   
  


   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<InfoSection />} />
      </Routes>
    </>
  );
}

export default App;
