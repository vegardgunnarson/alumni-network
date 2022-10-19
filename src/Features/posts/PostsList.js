import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "./postsSlice";
import { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";
import TimeAgo from "./TimeAgo";

const PostsList = () => {
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <section>
            <h2>Posts</h2>
            <div className="creategroupetimeline">
        <h5 className="Posttitle">Posts</h5>
            </div>
            {posts.map((post) => {
        return(
            <div className="postsection">
            <h4>target_student: {post.target_student}</h4>
             <p>content: {post.content}</p>
             <p>target_alumniEvent: {post.target_alumniEvent}</p>
             <p>target_alumniGroup: {post.target_alumniGroup}</p>
             <p>target_topic: {post.target_topic}</p>
             <p>reply_post: {post.reply_post}</p>
             <p>replies: {post.replies}</p>
             <p>private: {post._private}</p>
             <TimeAgo timestamp={post.timestamp} />
            </div>
            )
        })}
           
            
        </section>
    )
}
export default PostsList


/* {content}*/