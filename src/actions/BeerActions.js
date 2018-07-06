import {
    GET_BEER_CATALOG_FAIL,
    GET_BEER_CATALOG_SUCCESS,
    GET_BEER_FAIL,
    GET_BEER_SUCCESS,
} from './types';
import http from '../services/http.service';

export const getBeerCatalog = () => {
    return async (dispatch) => {
        try {
            const { data } = await http.get('/beers');
            dispatch({ type: GET_BEER_CATALOG_SUCCESS, payload: data });
        } catch (err) {
            const message = 'Oops! Something went wrong, buddy. Don\'t you wanna come back later?';
            dispatch({ type: GET_BEER_CATALOG_FAIL, payload: message });
        }
    }
}

export const getBeer = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await http.get(`/beers/${id}`);
            dispatch({ type: GET_BEER_SUCCESS, payload: data[0] });
        } catch (err) {
            const message = 'My bad! Couldn\'t find ya beer, mate.';
            dispatch({ type: GET_BEER_FAIL, payload: message });
        }
    }
}