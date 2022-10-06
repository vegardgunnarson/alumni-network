import { Component } from "react";
import { connect } from "react-redux";

class Posts extends Component {
    render() {

        const posts = [];

        for (let post of this.props.posts){
            posts.push(<div>key={post.id}{post.title}</div>)
        }
        return (
        <div>
            <h2 className="bold text-lg"> Posts</h2>
            <div> {posts} </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}

export default connect()(mapStateToProps) (Posts);