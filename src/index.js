
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { initialize } from './keycloak/keycloak';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { fetchUsers} from './Features/users/usersSlice'

/*console.log('Dispatching action')
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
console.log('Dispatch complete')*/

store.dispatch(fetchUsers());

const root = ReactDOM.createRoot(document.getElementById('root'));

initialize().then( () => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider> 
    </React.StrictMode>
  );
}).catch( () => {
  root.render(
    <React.StrictMode>
    <h1> Critical Error! </h1>
    <p>Keycloak has failed to start! please contact admin</p>
    </React.StrictMode>
  );
}) 