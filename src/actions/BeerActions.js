import {
    GET_BEER_FAIL,
    GET_BEER_SUCCESS,
} from './types';

export const getBeer = () => {
    return async (dispatch) => {
        try {
            // TODO: Get Beer
            dispatch({ type: GET_BEER_SUCCESS, payload: null });
        } catch (err) {
            console.log(err);
            const message = 'My bad! Couldn\'t find ya beer, mate.';
            dispatch({ type: GET_BEER_FAIL, payload: message });
        }
    }
}