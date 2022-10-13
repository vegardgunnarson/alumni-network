/*import keycloak from "../../keycloak/keycloak";
import { CONFIRMED_GET_POSTS, CREATE_POST_ACTION } from "../actions/PostActions";

const initialState = { 
    posts: [
        {id:1, title: 'post Title', description: 'Sample Description', username:'ad'},
        {id:2, title: 'post Title 2', description: 'Sample Description 2', username:'ad'},
        {id:3, title: 'post Title 3', description: 'Sample Description 3', username:'ad'},
    ],
};

export default function PostReducer (state = initialState, actions){
    if(actions.type === CREATE_POST_ACTION) {
        const post = {
            id: Math.random(),
            title: 'post Title  singel post',
            description: 'Sample Description 3 just more text',
            username: <span>{ keycloak.tokenParsed.name}</span>,
        };
        const posts = [...state.posts]
        posts.push(post);
        return{
            ...state,
            posts,
        };
    }

    if (actions.type === CONFIRMED_GET_POSTS){
        return{
            ...state,
            posts: actions.payload,
        };

    }
    return state;
}*/