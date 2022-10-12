import React from "react";
import keycloak from "../keycloak/keycloak";
import avatar from "../assets/avatar.svg";
import logo from "../assets/logo.svg";

import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/Navbar.scss";



export default function NavbarHeader() {
  return (
    <navbar>
      <nav class="navbar navbar-expand-lg navbar-light bg-light px-4 me-auto">
        <img src={logo} height="60px" />
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link m-4" href="/timeline">
              Timeline
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link m-4" href="/timeline">
              Events
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link m-4" href="/timeline">
              Groups
            </a>
          </li>
          <li class="m-4">
            <NavDropdown title={keycloak.authenticated &&keycloak.tokenParsed && <span>{keycloak.tokenParsed.name}</span>}>
              <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/Admin">Admin</NavDropdown.Item>
              <NavDropdown.Item href="/Token">Token</NavDropdown.Item>
              <NavDropdown.Item onClick={() => keycloak.logout()}>
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          </li>
          <li>
          <div class="input-group m-4 " className="searchbar">
          <div class="form-outline">
            <input id="search-input" type="search" className="form-control" />
          </div>
          <button id="search-button" type="button" class="btn btn-secondary">
            <i class="fas fa-search">Search</i>
          </button>
        </div>
          </li>
          </ul>
       
      </nav>

    </navbar>
  );
}
