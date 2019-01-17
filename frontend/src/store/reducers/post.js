import { GET_POST_SUCCESS, GET_POST_ERROR } from '../constants';

const INITIAL_STATE = {
    post: {},
    messageError: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_POST_SUCCESS:
            return { ...state, post: action.payload };
        case GET_POST_ERROR:
            return { ...state, messageError: action.payload };
        default:
            return state;
    }
}