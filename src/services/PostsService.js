import axios from "axios"
import { getPostsAction } from "../store/actions/PostActions"


/*export function getPostsAction(){
    return axios.get(
        'https:Link here',
    );
}*/

export function getPosts(){
    return axios.get(
        'https:Link here',
    );
}

export function createPost(postData) {
return axios.post(
    'https://Link here',
    postData,
);
}

export function formatPosts (postsData) {
    let posts = [];
    for (let key in postsData) {
        posts.push({ ...postsData[key], id: key });
    }

    return posts;
}