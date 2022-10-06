const initialState = { 
    posts: [
        {id:1, title: 'post Title', description: 'Sample Description'},
        {id:2, title: 'post Title 2', description: 'Sample Description 2'},
    ],
};

export default function PostReducer (state = initialState, actions){
    return state;
}