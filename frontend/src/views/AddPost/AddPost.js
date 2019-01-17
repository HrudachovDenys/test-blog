import React, { Component } from 'react';
import createEditor from '@cc98/react-ubb-editor';
import './AddPost.css';
import { connect } from 'react-redux';
import { addPost } from '../../store/actions/posts';

const Editor = createEditor();

class AddPost extends Component {

    constructor(props) {
        super(props);

        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeEditor = this.onChangeEditor.bind(this);
        this.onClick = this.onClick.bind(this);

        this.state = { user: '', title: '', description: '', text: '' }
    }

    onChangeUser(e) {
        this.setState({user: e.target.value});
    }
    onChangeTitle(e) {
        this.setState({title: e.target.value});
    }
    onChangeDescription(e) {
        this.setState({description: e.target.value});
    }
    onChangeEditor(value) {
        this.setState({text: value});
    }

    onClick() {
        let text = this.state.text.split('[').join('<');
        text = text.split(']').join('>');
        this.props.addPost(this.state.user, this.state.title, this.state.description, text);
    }

    render() {

        return (
            <div className="addPost">
                <h3>{this.props.message ? "Message: " + this.props.message : ''}</h3>
                <h1>Add new post</h1>
                <span>
                    <label>User</label>
                    <input onChange={this.onChangeUser} type="text" />
                </span>
                <span>
                    <label>Post title</label>
                    <input onChange={this.onChangeTitle} type="text" />
                </span>
                <span>
                    <label>Post description</label>
                    <input onChange={this.onChangeDescription} type="text" />
                </span>

                <Editor onChange={this.onChangeEditor} className="addPost__editor" />

                <button onClick={this.onClick} className="addPost__button">Add new post</button>

            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        message: store.addPost.messageSuccess || store.addPost.messageError
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        addPost: (user, title, description, text) => 
            dispatch(addPost(user, title, description, text))
    }
}
  

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);