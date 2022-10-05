import React from "react";
import keycloak from "../keycloak/keycloak";




export default function Navbar() {
  return (
    <navbar>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
    
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="/timeline">
                Timeline
              </a>
            </li>
           
            <li class="nav-item">
              <a class="nav-link" href="/Token">
                Token
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Admin">
                Admin
              </a>
            </li>
          
          
          <li><button onClick={() => keycloak.logout() }>logout</button></li>
          <li class="nav-item">
              <a class="nav-link" href="/profile">
                Profile: {keycloak.authenticated && keycloak.tokenParsed && <li><span>{ keycloak.tokenParsed.name}</span></li>}
              </a>
            </li>
        
          </ul>
      
        
      </nav>
    </navbar>
  );
}
