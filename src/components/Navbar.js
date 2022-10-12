import React from "react";
import keycloak from "../keycloak/keycloak";




export default function Navbar(props) {
  return (
    <navbar>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link m-4" href="/timeline">
                Timeline
              </a>
            </li>
           
            <li class="nav-item">
              <a class="nav-link m-4" href="/Token">
                Token
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link m-4" href="/Admin">
                Admin
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link m-4" href="/SettingsPage">
                Settings
              </a>
            </li>
          
            <li class="nav-item">
              <a class="nav-link m-4" href="/profile">
                Profile: {keycloak.authenticated && keycloak.tokenParsed && <span>{ keycloak.tokenParsed.name}</span>}
              </a>
            </li>

            <li><button class="btn btn-danger m-4" onClick={() => keycloak.logout() }>Logout</button></li>

            <li class="nav-item">
              <a class="nav-link m-4" href="/CreatePost">
                Create Post
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link m-4" href="/Posts">
                Posts
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link m-4" href="/PostsList">
              PostsList 
              </a>
            </li>

           
            <li class="nav-item">
              <a class="nav-link m-4" href="/Events">
                Events
              </a>
            </li>
          </ul>

          
      
        
      </nav>
    </navbar>
  );
}
