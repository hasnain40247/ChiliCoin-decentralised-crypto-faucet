 import React from "react"
 import { BsFillArrowLeftCircleFill,BsFillCircleFill } from "react-icons/bs";
 import AnchorLink from 'react-anchor-link-smooth-scroll'

 
 const ScrollIndicator=()=>{
return(
    <div className="scrollInd">
  
 
    
  <div style={{
    display:"flex",
    flexDirection:"row",
    alignItems:"center"
  }}>

    <AnchorLink href="#transfer"><BsFillArrowLeftCircleFill className="arrow"/></AnchorLink>
    <BsFillCircleFill className="circle" />

    <BsFillCircleFill className="circle" />
    <BsFillCircleFill className="circle" />

    <BsFillCircleFill className="circle" />
    <BsFillCircleFill className="circle" />
    <BsFillCircleFill className="circle" />
    <BsFillCircleFill className="circle" />
    <BsFillCircleFill className="circle" />


  </div>
    
     </div>
)
 }
 export default ScrollIndicator