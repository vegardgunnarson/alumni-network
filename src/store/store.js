
/*
import { legacy_createStore as createStore, applyMiddleware, compose  } from 'redux';
import { confirmedGetEventsAction, GET_EVENTS } from './actions/EventsActions';
import { confirmedGetPostsAction, GET_POSTS } from './actions/PostActions';
import rootReducer from './reducers/rootReducer';


import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios';
import EventReducer from './reducers/EventsReducer';
import PostReducer from './reducers/PostsSlice';
*/

import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../Features/posts/postsSlice'
import usersReducer from '../Features/users/usersSlice'

export const store = configureStore({
    reducer: {
         // Define a top-level state field named `todos`, handled by `todosReducer`
    posts: postsReducer,
    users: usersReducer
    }
})

// The store now has the ability to accept thunk funtions in 'dispatch'
//const store = createStore(rootReducer, composedEnhancer)
//export default store


/*
const loggerMiddleware = (store) => (next) => (action) =>{
    console.log('despatching action', action);
    console.log('before dispatching state', store.getState());
    let result = next(action);
    setTimeout(() => {
        console.log('dispatch time out');
    }, 5000)
    console.log("next state", store.getState());

    return result;
};

const fetchDataMiddleware = store => next => action => {
    if (action.type === GET_EVENTS ) {
        //ajax call?
    axios
        .get(`https://alumni-case-database.herokuapp.com/api/v1/alumniEvent`)
        .then((response) => {
            console.log(response.data);
            let events = [];
            for (let key in Response.data) {
                events.push({ ...Response.data[key], id: key });
            }
            store.dispatch(confirmedGetEventsAction(events));
            // contine here nr. 69 Perform Async Ajax API Call using Redux at 5.00
        });
    }

    return next(action);
};


const middleware = applyMiddleware (loggerMiddleware, fetchDataMiddleware);

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore (rootReducer, composeEnhancers (middleware)) 
*/
