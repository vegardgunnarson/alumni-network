import React from "react";
import keycloak from "../keycloak/keycloak";



export default function LogIn () {
    return (
        <div>
            <h1>hi</h1>
        <button class="btn btn-secondary mb-4" onClick={() => keycloak.login() }>Get started</button> 
        </div>
    )
}