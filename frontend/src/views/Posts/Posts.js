import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../store/actions/posts';
import { Link } from 'react-router-dom';
import './Posts.css';

class Posts extends Component {

    async componentDidMount() {
        await this.props.getPosts();
        return;
    }

    render() {
        return(
            <div className="posts">
                <h1>All posts</h1>
                {this.props.posts.map(post => {
                    return (
                        <div className="posts__post" key={post._id}>
                            <h2>{"title: " + post.title}</h2>
                            <p>{"User: " + post.user}</p>
                            <p>{"Date: " + new Date(post.publication_date).toUTCString()}</p>
                            <h3>{"Description: " + post.description}</h3>
                            <Link to={'/post/' + post._id}>read this post completely</Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        message: store.posts.messageError,
        posts: store.posts.posts
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch(getPosts())
    }
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Posts);