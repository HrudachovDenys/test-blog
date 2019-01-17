import { ADD_POST_SUCCESS, ADD_POST_ERROR } from '../constants';

const INITIAL_STATE = {
    messageSuccess: '',
    messageError: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_POST_SUCCESS:
            return { ...state, messageSuccess: action.payload };
        case ADD_POST_ERROR:
            return { ...state, messageError: action.payload };
        default:
            return state;
    }
}