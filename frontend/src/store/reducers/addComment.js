import { ADD_COMMENT_SUCCESS, ADD_COMMENT_ERROR } from '../constants';

const INITIAL_STATE = {
    messageSuccess: '',
    messageError: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_COMMENT_SUCCESS:
            return { ...state, messageSuccess: action.payload };
        case ADD_COMMENT_ERROR:
            return { ...state, messageError: action.payload };
        default:
            return state;
    }
}