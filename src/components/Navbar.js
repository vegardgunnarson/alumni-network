import React from "react";
import keycloak from "../keycloak/keycloak";
import { useNavigate } from 'react-router-dom';

import logo from "../assets/logo.svg";
import NavDropdown from 'react-bootstrap/NavDropdown';

import avatar from '../assets/avatar.svg'
import "../styles/Navbar.scss";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'


const LogOut = () => {

  const nav = useNavigate();

  nav('/')
}

const Groups = () => {
  const nav = useNavigate();
  nav('/groups')
}

export default function NavbarHeader(props) {

  return (
    <div className="stickynavbar">
    <navbar>
      <nav id="navbar_top" class="navbar navbar-expand-lg navbar-light bg-light px-4 me-auto">
        <img src={logo} height="60px" alt="no img"/>
        <Form className="d-flex m-4">
            <Form.Control
            type="Search"
            className="me-2"
            aria-label="Search"/>
          <button id="search-button" type="button" class="btn btn-secondary">
            <i class="fas fa-search">Search</i>
          </button>
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

    </navbar>
    </div>
  );
}