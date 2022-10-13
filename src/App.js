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
import  Posts from './components/Posts/Posts';
import { LoggedInRoute } from './hoc/LoggedInRoute';
import { RoleCheckRoute } from './hoc/RoleCheckRoute';
import { CreatePost } from './components/CreatePost';
import { SettingsPage } from "./components/SettingsPage";
import Events from './components/Events';
import PostsList from './Features/posts/PostsList';
import AddPostForm from './Features/posts/AddPostForm';


function App() {
  /*return(
    <main className="App">
      <PostsList />

    </main>
  )
}*/
  
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


            <Route path="/createpost" element={
            <KeycloakRoute role={ ROLES.User }>
            <CreatePost /> 
            </KeycloakRoute>
            }/>

            <Route path="/posts" element={
            <KeycloakRoute role={ ROLES.User }>
            <Posts /> 
            
            </KeycloakRoute>
            }/>

            <Route path="/postslist" element={
            <KeycloakRoute role={ ROLES.User }>
            <AddPostForm />
            <PostsList /> 
            </KeycloakRoute>
            }/>
            
            

            <Route path="/events" element={
            <KeycloakRoute role={ ROLES.User }>
            <Events /> 
            </KeycloakRoute>
            }/>
           
            <Route path="/settingspage" element={
            <KeycloakRoute role={ ROLES.User }>
            <SettingsPage /> 
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
