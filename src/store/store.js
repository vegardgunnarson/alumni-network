
import { legacy_createStore as createStore, applyMiddleware, compose  } from 'redux';
import { GET_POSTS } from './actions/PostActions';
import PostReducer from "./reducers/PostsReducer";

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
    if (action.type === GET_POSTS) {
        //ajax call?
        
            // contine here nr. 69 Perform Async Ajax API Call using Redux at 5.00
     
    }

    return next(action);
};

const middleware = applyMiddleware (loggerMiddleware, fetchDataMiddleware);

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore (PostReducer, composeEnhancers (middleware),);


