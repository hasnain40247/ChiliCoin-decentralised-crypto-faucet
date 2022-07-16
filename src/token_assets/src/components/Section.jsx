import React, { useEffect } from "react";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { BsArrowDownCircleFill } from "react-icons/bs";
import AnchorLink from 'react-anchor-link-smooth-scroll'


import Header from "./Header";
import Faucet from "./Faucet";
import Balance from "./Balance";
import Transfer from "./Transfer";
import Model from "./Model";
import Token from "./Token";
import * as THREE from "three"
import Navbar from "./Navbar";
const Section=()=>{
    useEffect(()=>{
        const scene= new THREE.Scene()
    
    
      
        const canvas=document.getElementById("myCanvas")
        console.log(canvas);
        const renderer=new THREE.WebGLRenderer({
          canvas, antialias:true
        })
        renderer.setSize(window.innerWidth*0.4,window.innerHeight*0.5)
        renderer.setClearColor( 0xffffff, 0);
    
        const camera= new THREE.PerspectiveCamera(
          50,(window.innerWidth*0.4)/( window.innerHeight*0.5),1,1000
        )
    
    
    
        const ambientLight=new THREE.AmbientLight(0x404040 )
       
        ambientLight.castShadow=true
        scene.add(ambientLight)
        const spotLight=new THREE.SpotLight(0xffffff,50)
        spotLight.position.set( 0, 10, 20 );
    
        spotLight.castShadow=true
        scene.add(spotLight)
    
        var controls = new OrbitControls( camera, renderer.domElement );
                    controls.listenToKeyEvents( window ); // optional
    
                    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
    
                    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
                    controls.dampingFactor = 0.05;
    
                    controls.screenSpacePanning = false;
    
                    controls.minDistance = 1.7;
                    controls.maxDistance = 5;
    
                    controls.maxPolarAngle = Math.PI / 2;
        
    
            camera.position.z=1.7
            controls.update();
    
    
        let obj;
        const loader= new GLTFLoader()
        console.log(loader)
        loader.load('token.glb', gltf=>{
            obj=gltf.scene
            obj.name="token"
            obj.position.x=0
            obj.position.y=0
            obj.receiveShadow=true
            obj.castShadow=true
            scene.add(obj)
            obj.traverse(function(child){
                if(child.isMesh){
                    child.castShadow=true
                    child.receiveShadow=true
                }
            })
    
            console.log("Syuccess");
    
        }, undefined , function (error){
    console.log(error);
        })
    
        const animate = () => {
    
          if (obj) {
            
         
            obj.rotation.y += 0.01;
            
          }
          requestAnimationFrame(animate);
          controls.update();
    
          renderer.render( scene, camera );
    
    
    
        };
        animate();
    

        window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

  console.log(window.innerWidth*0.01);

    camera.aspect = (window.innerWidth*0.4)/( window.innerHeight*0.5);
    camera.zoom=window.innerWidth*0.0007
    
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth*0.4,window.innerHeight*0.5 );

}
    
        // const animate=()=>{
        //   boxMesh.rotation.x+=0.01
        //   boxMesh.rotation.y+=0.01
        //   renderer.render(scene,camera)
        //   window.requestAnimationFrame(animate)
    
        // }
        // animate()
    
      },[])

      
  return(
    <div className="introsection">
    <div className="introdiv">
        <h1 className="introText2"> Claim The <span className="spanText">"Hottest"</span> Token In The Market!</h1>

<canvas id="myCanvas"/>
    </div>

<AnchorLink href="#transactions" className="icon" style={{
  padding:"10px",
  fontSize: "2rem",
  color:"#48644c",
  marginTop:"3rem",
  
}}><BsArrowDownCircleFill  /></AnchorLink>

    </div>
  )
}

export default Section