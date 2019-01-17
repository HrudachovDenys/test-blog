import { GET_COMMENTS_SUCCESS, GET_COMMENTS_ERROR } from '../constants';

const INITIAL_STATE = {
    comments: [],
    messageError: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_COMMENTS_SUCCESS:
            return { ...state, comments: action.payload };
        case GET_COMMENTS_ERROR:
            return { ...state, messageError: action.payload };
        default:
            return state;
    }
}