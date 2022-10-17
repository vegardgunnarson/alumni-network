
import keycloak from '../../keycloak/keycloak';
import { useDispatch } from 'react';
import {reactionDisplay} from './postsSlice'

const reactionUsername = {
    username: 'Username'
}

/*
const Username = ({ post }) => {
    const dispatch = useDispatch()
   
    const username = Object.entries(reactionUsername).map(([name, username]) => {
    return (
        <button
                key={name}
                type="button"
                className="username"
                onClick={() =>
                    dispatch(reactionDisplay({ postId: post.id, reaction: name }))
                }
            >
                {username} {post.reactions[name]}
            </button>
    )
})

return <div>{username}</div>
}
export default Username
*/
/*
const reactionEmoji = {
    thumbsup: '👍',
    thumbsdown: '👎',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}
const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return <div>{reactionButtons}</div>*/
