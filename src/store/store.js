import { legacy_createStore as createStore } from 'redux';
import PostReducer from "./reducers/PostsReducer";


export const store = createStore (PostReducer);