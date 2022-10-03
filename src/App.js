import logo from './assets/logo.svg';
import './styles/App.css';
import React from 'react';
import './custom.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import Profile from './components/Profile'
import Timeline from './components/Timeline'


function App() {
  return (
    <div>
      <Router >
        <Header />
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
