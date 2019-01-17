import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostById } from '../../store/actions/posts';
import { addComment, getComments } from '../../store/actions/comments';
import './PostById.css';

class PostById extends Component {

    constructor(props) {
        super(props);

        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onClick = this.onClick.bind(this);

        this.state = { user: '', comment: '' };
    }

    async componentDidMount() {
        await this.props.getPostById(this.props.match.params.id);
        await this.props.getComments(this.props.match.params.id);

        return;
    }

    onChangeUser(e) {
        this.setState({ user: e.target.value });
    }

    onChangeComment(e) {
        this.setState({ comment: e.target.value });
    }

    async onClick() {
        await this.props.addComment(this.state.user, this.state.comment, this.props.match.params.id);
        await this.props.getComments(this.props.match.params.id);

        return;
    }

    render() {
        return (
            <div className="post">
                <h1>{"Title: " + this.props.post.title}</h1>
                <i>{"Users: " + this.props.post.user}</i>
                <br />
                <i>{"Date: " + new Date(this.props.post.publication_date).toUTCString()}</i>
                <p dangerouslySetInnerHTML={{ __html: this.props.post.text }}></p>
                <div className="post__comments">
                    <input onChange={this.onChangeUser} className="comments__name" type='text' placeholder='name'></input>
                    <input onChange={this.onChangeComment} className="comments__comment" type='text' placeholder='comment'></input>
                    <button onClick={this.onClick} className="comments__send">Send comment</button>
                    {this.props.comments.map(comment => {
                        return (
                            <p>
                                <i>{"Users: " + comment.user}</i>
                                <br />
                                <i>{"Date: " + new Date(comment.date).toUTCString()}</i>
                                <br />
                                <i>{"Comment: " + comment.user}</i>
                                {comment.comment}
                            </p>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        post: store.post.post,
        comments: store.comments.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPostById: (id) => dispatch(getPostById(id)),
        addComment: (user, comment, post_id) => dispatch(addComment(user, comment, post_id)),
        getComments: (post_id) => dispatch(getComments(post_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostById);