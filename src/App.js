import './styles/App.css';
import React from 'react';
import './custom.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import Groups from './components/Group/Groups';
import Profile from './components/Profile'
import Timeline from './components/Timeline'
import { TokenPage } from './components/TokenPage';
import { AdminPage } from './components/AdminPage';
import KeycloakRoute from "./routes/KeycloakRoute";
import { ROLES } from "./const/roles";
import { LoggedInRoute } from './hoc/LoggedInRoute';
import { RoleCheckRoute } from './hoc/RoleCheckRoute';
import CreatePost from './components/CreatePost';
import Events from './components/Event/Events.jsx';
import Topics from './components/Topic/Topics';
import Calendar from './components/calendar/Calendar';



function App() {
  
  return (
    <div>
      
      <Router >
      <Navbar />
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


            <Route path="/createpost" element={
            <KeycloakRoute role={ ROLES.User }>
            <CreatePost /> 
            </KeycloakRoute>
            }/>


            
            <Route path="/events" element={
            <KeycloakRoute role={ ROLES.User }>
            <Events /> 
            </KeycloakRoute>
            }/>

            <Route path="/topics" element={
            <KeycloakRoute role={ ROLES.User }>
            <Topics /> 
            </KeycloakRoute>
            }/>

            <Route path="/calendar" element={
            <KeycloakRoute role={ ROLES.User }>
            <Calendar /> 
            </KeycloakRoute>
            }/>

            <Route path="/profile" element={
              <KeycloakRoute role={ ROLES.User }>
                <Profile />
              </KeycloakRoute>
            }/>
          </Routes>
          </Router>
      <Footer />
      </div>

  );
}

export default App;
