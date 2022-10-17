import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const client = axios.create({
  baseURL: " https://alumni-case-database.herokuapp.com/api/v1/post" 
});


const PostPage = () => {
    const [timestamp, setTimestamp] = useState('');
    const [sender_student, setSender_student] = useState('');
    const [target_student, setTarget_student] = useState('');
    const [target_alumniEvent, setTarget_alumniEvent] = useState('');
    const [target_alumniGroup, setTarget_alumniGroup] = useState('');
    const [target_topic, setTarget_topic] = useState('');
    const [reply_post, setReply_post] = useState('');
    const [replies, setReplies] = useState('');
    const [id, setId] = useState ('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [posts, setPosts] = useState([]);
 // handle form submission
 const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(id, title, content);
};

// POST with Axios
const addPosts = async (id, title, content) => {
    try {
        let response = await client.post('', {
            id: id,
            title: title,
            content: content,
        });
        setPosts([response.data, ...posts]);
        setId('');
        setTitle('');
        setContent('');
    } catch (error) {
        console.log(error);
    }
};

     // GET with Axios
	useEffect(() => {
		const fetchPost = async () => {
			try {
				let response = await client.get('?_limit=10');
				setPosts(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchPost();
	}, []);

	// DELETE with Axios
	const deletePost = async (id) => {
		try {
			await client.delete(`${id}`);
			setPosts(
				posts.filter((post) => {
					return post.id !== id;
				})
			);
		} catch (error) {
			console.log(error);
		}
	};

	

    return (
        <div className="PostPage">
        <nav>
            <h1>POSTS APP</h1>
        </nav>
        <div className="add-post-container">
        <h3>title:</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <h3>content:</h3>
                <textarea
                    name=""
                    className="form-control"
                    id=""
                    cols="5"
                    rows="2"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <button type="submit">Add Post</button>
            </form>
        </div>
        <div className="posts-container">
            <h2>All Posts 📫</h2>
            {posts.map((post) => {
                return (
                    <div className="post-card" key={post.id}>
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-body">{post.body}</p>
                       
                            <div className="btn delete-btn border-5 bg-color=blue" onClick={() => deletePost(post.id)}>
                                Delete
                            </div>
                        
                    </div>
                );
            })}
        </div>
    </div>
);
};
 
 export default PostPage;