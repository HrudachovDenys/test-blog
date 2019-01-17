import api from '../api';

import { 
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_ERROR,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_ERROR
} from '../constants';

export const addComment = (user, comment, post_id) => dispatch => {
    const data = {
        user: user,
        comment: comment,
        post_id: post_id
    }
    return api.addComment(data).then(res => {
        dispatch({ type: ADD_COMMENT_SUCCESS, payload: 'Comment successfully added' });
    }).catch(err => {
        dispatch({ type: ADD_COMMENT_ERROR, payload: 'There was an error while adding' });
    })
}

export const getComments = (post_id) => dispatch => {
    return api.getComments(post_id).then(res => {
        dispatch({ type: GET_COMMENTS_SUCCESS, payload: res.data });
    }).catch(err => {
        dispatch({ type: GET_COMMENTS_ERROR, payload: 'Failed to get data' });
    })
}