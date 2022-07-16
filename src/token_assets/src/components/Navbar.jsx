import React, { useState } from "react";
import { Link } from "../../../../node_modules/react-router-dom/index";

const Navbar=({to})=>{
    console.log(to);

    return(
        <nav className="navbar">
            <Link to={to}>
            <img className="logo"  src="chili.png" height={50} width={50}/>
            </Link>
            <h2>Chili.</h2>
        </nav>
    )
}

export default Navbar