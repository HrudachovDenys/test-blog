import api from '../api';
import { 
    ADD_POST_SUCCESS, 
    ADD_POST_ERROR, 
    GET_POSTS_SUCCESS, 
    GET_POSTS_ERROR,
    GET_POST_SUCCESS, 
    GET_POST_ERROR
} from '../constants';

export const addPost = (user, title, description, text) => dispatch => {
    if(user && title && description && text) {
        return api.addPost({
            user: user,
            title: title,
            description: description,
            text: text
        }).then(res => {
            dispatch({ type: ADD_POST_SUCCESS, payload: 'Post successfully added' });
        }).catch(err => {
            dispatch({ type: ADD_POST_ERROR, payload: 'There was an error while adding' });
        })
    } else {
        dispatch({ type: ADD_POST_ERROR, payload: 'Not all fields are filled' });
    }
}

export const getPosts = () => dispatch => {
    return api.getPosts().then(res => {
        dispatch({ type: GET_POSTS_SUCCESS, payload: res.data });
    }).catch(err => {
        dispatch({ type: GET_POSTS_ERROR, payload: 'Failed to get data' });
    })
}

export const getPostById = (id) => dispatch => {
    return api.getPostById(id).then(res => {
        dispatch({ type: GET_POST_SUCCESS, payload: res.data });
    }).catch(err => {
        dispatch({ type: GET_POST_ERROR, payload: 'Failed to get data' });
    })
}