import './styles/App.css';
import React from 'react';
import './custom.scss';
import { Route, Routes } from "react-router-dom";

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
import Events from './components/Events.jsx';
import PostsList from './Features/posts/PostsList';
import AddPostForm from './Features/posts/AddPostForm';
import SinglePostPage from './Features/posts/SinglePostPage';
import Layout from './components/Layout';
import EditPostForm from './Features/posts/EditPostForm';
import PostPage from './PostHttpRequest/PostsRequests';


function App() {
/*
    <Routes>
         <Route path="/" element={<Layout />}> 

          <Route index element={<PostsList />} />

          <Route path="post">
            <Route index element={<AddPostForm />} />
            <Route Path="postId" element={<SinglePostPage />} />
          </Route>
              
          
         </Route>
        </Routes>
*/

  return (
    <div>
      <NavbarHeader />
      
      <Routes>
<Route path="/postslist" element={<KeycloakRoute role={ ROLES.User }> <Layout /> </KeycloakRoute> }>

  <Route index element={<PostsList />} />

  <Route path="post">
    <Route index element={<AddPostForm />} />
    <Route path=":postId" element={<SinglePostPage />} />
    <Route path="edit/:postId" element={<EditPostForm />} />
  </Route>

  

</Route>

<Route path="/post" element={<KeycloakRoute role={ ROLES.User }> <Layout /> </KeycloakRoute> }>

    <Route index element={<AddPostForm />} />
    <Route path=":postId" element={<SinglePostPage />} />
    <Route path="edit/:postId" element={<EditPostForm />} />
  </Route>

<Route path="/PostPage" element={
            <KeycloakRoute role={ ROLES.User }>
            
            <PostPage />
            </KeycloakRoute>
            }/>

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
     
    </div>
  );
}

export default App;
/*
<Route path="/postslist" element={
  <KeycloakRoute role={ ROLES.User }>
  <AddPostForm />
  <PostsList /> 
  </KeycloakRoute>
  }/>

  <Route path="post">
    <Route index element={<AddPostForm />} />
    <Route path=":postId" element={<SinglePostPage />} />
  </Route>*/

