import { Component } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from 'redux';

import { 
    createPostAction, 
    getPostsAction 
} from '../../store/actions/PostActions';

class Posts extends Component {
    onCreatePost(){
        this.props.createPostAction();
    }
    
  /*  componentDidMount() {
        this.props.getPostsAction();
    }*/

    render() {
        const posts = [];

        for (let post of this.props.posts){
            posts.push(
                <div
                    key={post.id}
                    className='shadowborder p-3 mx-3 mt-3 w-1/3'
                >
                    <div>{post.title}</div>
                    <div>{post.description}</div>
                    <div>{post.username}</div>
                </div>    
            )
        }

        return(
        <div>
            <h2 className="bolder text-lg"> Posts</h2>
            <button className="bg-red-300 px-3 py-2"
                onClick={this.onCreatePost.bind(this)}
            >
                Create Post
            </button>               
            <hr />
            <div className='flex'>{posts}</div>

        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { createPostAction, getPostsAction }, 
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps) (Posts); 