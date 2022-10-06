import { configureStore } from '@reduxjs/toolkit'
import PostReducer from "./reducers/PostsReducer";


export const store = configureStore (PostReducer);