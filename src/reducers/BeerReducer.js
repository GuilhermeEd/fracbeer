import {
    GET_BEER_FAIL,
    GET_BEER_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
    beer: null,
    error: null,
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case GET_BEER_FAIL:
            return { ...state, error: action.payload };
        case GET_BEER_SUCCESS:
            return { ...state, beer: action.payload };
        default:
            return state;
    };

};