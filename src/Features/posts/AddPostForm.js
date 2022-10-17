import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import keycloak from "../../keycloak/keycloak";
import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersGroupSlice";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate()

   const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [username, setUsername] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const users = useSelector(selectAllUsers)

   const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)
    const onUsernameChanged = e => setUsername(e.keycloak.tokenParsed.name)


    const canSave = [content].every(Boolean) && addRequestStatus === 'idle';

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                dispatch(addNewPost({title, body: content, username, userId })).unwrap()

               setTitle('')
                setContent('')
                setUsername('')
                setUserId('')
                navigate('/PostsList')
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }

    }

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
  /*  
                />*/
    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
            
            <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}/>
                <label htmlFor="PostAuthor">Aluminigroup:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                
                <label type="text" 
                id="postUsername" 
                name="postUsername" 
                value={username} 
                onChange={onUsernameChanged}><h4>name:</h4>{keycloak.tokenParsed.name}</label>
                
                     <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}
export default AddPostForm

/*<label type="text" id="postUsername" name="postUsername" value={username} 
                onChange={onUsernameChanged}><h4>name:</h4>{keycloak.tokenParsed.name}</label>*/