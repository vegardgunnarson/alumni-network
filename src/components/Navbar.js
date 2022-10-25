import React from "react";
import keycloak from "../keycloak/keycloak";
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/Navbar.scss";
import globe from '../assets/globe.svg';

/*
<Form className="d-flex m-4">
import Form from 'react-bootstrap/Form';
            <Form.Control
            type="Search"
            className="me-2"
            placeholder="Search..."
            aria-label="Search"/>
        </Form>
*/

const LogOut = () => {
  const nav = useNavigate();
  localStorage.clear();
  nav('/')
}



export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navi">
      <div className="navbarSpace"></div>
    <div className="stickynavbar">
      <nav id="navbar_top" class="navbar navbar-expand-lg  me-auto">
        <img src={globe} width="30px" alt="no logo found"/>
        <a class="nav-link m-1" className="navtitle" onClick={() => navigate('/timeline')}><h2>Alumni Network Solution</h2></a>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active" className="links">
            <a class="nav-link m-1" onClick={() => navigate('/timeline')}>
              Home
            </a>
          </li>
          <li class="nav-item active" className="links">
            <a class="nav-link m-1" onClick={() => navigate('/events')}>
              Events
            </a>
          </li>
          <li class="nav-item active" className="links">
            <p class="nav-link m-1" onClick={() => navigate('/groups')}>
              Groups
            </p>
          </li>
          <li class="nav-item active" className="links">
            <a class="nav-link m-1" onClick={() => navigate('/topics')}>
              Topics
            </a>
          </li>
          <li class="m-1">
            <NavDropdown className="links" title={keycloak.authenticated &&keycloak.tokenParsed && <span>{keycloak.tokenParsed.name}</span>}>
              <NavDropdown.Item onClick={() => navigate('/profile')}>Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/admin')}>Admin</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/token')}>Token</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/postlist')}>Postslist</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/Calendar')}>Calendar</NavDropdown.Item>
              <NavDropdown.Item onClick={() => keycloak.logout() && LogOut()}>
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          </li>
          </ul>
       
      </nav>

  
    </div>
    </div>
  );
}