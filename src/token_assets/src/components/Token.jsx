import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import loadGLTF from './loadGLTF';
function easeOutCirc(x){
    return Math.sqrt(1-Math.pow(x-1,4))
}

const Token=()=>{
    const refContainer=useRef()
    return <div ref={refContainer}>
        <h1>Hello!</h1>
    </div>
}

export default Token