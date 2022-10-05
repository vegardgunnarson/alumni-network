import React from "react";
import keycloak from "../keycloak/keycloak";



export default function LogIn () {
    return (
        <div>
            <h1>hi</h1>
        <button onClick={() => keycloak.login() }>Login</button> 
        </div>
    )
}