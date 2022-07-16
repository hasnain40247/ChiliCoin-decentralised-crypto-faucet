import React from "react"
import Navbar from "./Navbar"
import { GiChiliPepper} from "react-icons/gi";


const InfoSection=()=>{
    return(
      <div>
        <Navbar to={"/"}/>
          <div className="aboutSec">
        

        <img src="hasnain.png" className="hasnain" height={350} width={350} style={{borderRadius:"500px"}}/>
      
        <h1> <GiChiliPepper style={{
            color:"#4c6f5b",
            fontSize:"1.5rem"
      
        }}/>ABOUT</h1>
        <h6>

My name is Hasnain and I like to indulge myself into learning and creating as much as I can. This side-project is just another attempt to do exactly that. This website is meant to showcase <span className="highlight">Web 3.0's </span> capabilities. It takes the advantage of <span className="highlight">Dfinity's decentralised and public blockchain </span> to host itself on. The tokens are values stored in a decentralized token cannister which is authenticated by my ICP identity. The website was made using vanilla CSS and <span className="highlight">React JS and Three JS </span>.

        </h6>
    </div>
      </div>
    )
}

export default InfoSection