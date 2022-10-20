import React from "react";
import keycloak from "../keycloak/keycloak";
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/Navbar.scss";
import Form from 'react-bootstrap/Form';



const LogOut = () => {

  const nav = useNavigate();
  localStorage.clear();
  nav('/')
}



export default function Navbar() {

  return (
    <div className="stickynavbar">
      <nav id="navbar_top" class="navbar navbar-expand-lg navbar-light bg-light px-4 me-auto">
        <a class="nav-link m-4" href="/timeline"><h2>Alumni Network</h2></a>
        <Form className="d-flex m-4">
            <Form.Control
            type="Search"
            className="me-2"
            placeholder="Search..."
            aria-label="Search"/>
        </Form>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">
            <a class="nav-link m-4" href="/timeline">
              Home
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link m-4" href="/events" >
              Events
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link m-4" href="/groups">
              Groups
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link m-4" href="/topics">
              Topics
            </a>
          </li>
          <li class="m-4">
            <NavDropdown title={keycloak.authenticated &&keycloak.tokenParsed && <span>{keycloak.tokenParsed.name}</span>}>
              <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/Admin">Admin</NavDropdown.Item>
              <NavDropdown.Item href="/Token">Token</NavDropdown.Item>
              <NavDropdown.Item href="/PostsList">Postslist</NavDropdown.Item>
              <NavDropdown.Item onClick={() => keycloak.logout() && LogOut()}>
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          </li>
          </ul>
       
      </nav>

  
    </div>
  );
}