import ReactDOM from 'react-dom'
import React from 'react'
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { AuthClient } from "@dfinity/auth-client"

const init = async () => { 

const authClient= await AuthClient.create()
if(await authClient.isAuthenticated()){
handleAuthenticated(authClient)
}
else{
  await authClient.login({
    identityProvider: "https://identity.ic0.app/#authorize",
    onSuccess:()=>{
  handleAuthenticated(authClient)
    }
  })
}

}

async function handleAuthenticated(authClient){
  ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  , document.getElementById("root"));

}

init();


