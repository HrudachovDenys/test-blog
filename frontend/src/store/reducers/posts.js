import { GET_POSTS_SUCCESS, GET_POSTS_ERROR } from '../constants';

const INITIAL_STATE = {
    posts: [],
    messageError: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_POSTS_SUCCESS:
            return { ...state, posts: action.payload };
        case GET_POSTS_ERROR:
            return { ...state, messageError: action.payload };
        default:
            return state;
    }
}