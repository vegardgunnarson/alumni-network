import './styles/App.css';
import React from 'react';
import './custom.scss';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import Profile from './components/Profile'
import Timeline from './components/Timeline'
import { TokenPage } from './components/TokenPage';
import { AdminPage } from './components/AdminPage';
import KeycloakRoute from "./routes/KeycloakRoute";
import { ROLES } from "./const/roles";

function App() {
  return (
    <div>
      <Router >
        <Header />
        <nav>
          <li><Link to="/"> LogIn</Link></li>
          <li><Link to="/token"> Token</Link></li>
          <li><Link to="/admin"> Admin</Link></li>
        </nav>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/profile" element={
              <KeycloakRoute role={ ROLES.User }>
                <Profile />
              </KeycloakRoute>
            }/>
          </Routes>
          <Footer />
      </Router>
      <TokenPage />
      <AdminPage />
      <Timeline />
    </div>
    
  );
}

export default App;
