import './styles/App.css';
import React from 'react';
import './custom.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavbarHeader from './components/Navbar';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import Groups from './components/Groups';
import Profile from './components/Profile'
import Timeline from './components/Timeline'
import { TokenPage } from './components/TokenPage';
import { AdminPage } from './components/AdminPage';
import KeycloakRoute from "./routes/KeycloakRoute";
import { ROLES } from "./const/roles";

import { LoggedInRoute } from './hoc/LoggedInRoute';
import { RoleCheckRoute } from './hoc/RoleCheckRoute';

function App() {
  return (
    <div>
      <NavbarHeader />
      <Router >
      
          <Routes>
          <Route path='/admin' element={
              <RoleCheckRoute role="ADMIN">
                <AdminPage />
              </RoleCheckRoute>
            } />
            <Route path='/token' element={
              <LoggedInRoute>
                <TokenPage />
              </LoggedInRoute>
            } />
            <Route path="/" element={<LogIn />} />
            <Route path="/timeline" element={
            <KeycloakRoute role={ ROLES.User }>
            <Timeline /> 
            </KeycloakRoute>
            }/>
            <Route path="/groups" element={
            <KeycloakRoute role={ ROLES.User }>
            <Groups /> 
            </KeycloakRoute>
            }/>
            <Route path="/profile" element={
              <KeycloakRoute role={ ROLES.User }>
                <Profile />
              </KeycloakRoute>
            }/>
          </Routes>
          <Footer />
      </Router>

    </div>
    
  );
}

export default App;
