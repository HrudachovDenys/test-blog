import { combineReducers } from 'redux';
import addPost from './addPost';
import posts from './posts';
import post from './post';
import addComment from './addComment';
import comments from './comments';

export const reducers = combineReducers({
    addPost: addPost,
    posts: posts,
    post: post,
    addComment: addComment,
    comments: comments
})