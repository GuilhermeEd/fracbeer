import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import {
    GET_BEER_CATALOG_FAIL,
    GET_BEER_CATALOG_SUCCESS,
    GET_BEER_FAIL,
    GET_BEER_SUCCESS,
} from '../../src/actions/types';

import { beerSeed, catalogSeed } from './BeerReducer.seed';
import BeerReducer from '../../src/reducers/BeerReducer';

describe('BeerReducer', () => {

    /* it('should show error case GET_BEER_CATALOG_FAIL', () => {
        let state = { error: null };
        const payload = 'Oops! Something went wrong, buddy. Don\'t you wanna come back later?';
        const action = { type: GET_BEER_CATALOG_FAIL, payload };
        state = BeerReducer(state, action);
        expect(state).to.deep.equal({ error: 'Oops! Something went wrong, buddy. Don\'t you wanna come back later?' });
    });

    it('should change catalog case GET_BEER_CATALOG_SUCCESS', () => {
        let state = { catalog: null };
        const payload = catalogSeed;
        const action = { type: GET_BEER_CATALOG_SUCCESS, payload };
        state = BeerReducer(state, action);
        expect(state).to.deep.equal({ catalog: payload });
    });

    it('should show error case GET_BEER_FAIL', () => {
        let state = { error: null };
        const payload = 'My bad! Couldn\'t find ya beer, mate.';
        const action = { type: GET_BEER_FAIL, payload };
        state = BeerReducer(state, action);
        expect(state).to.deep.equal({ error: 'My bad! Couldn\'t find ya beer, mate.' });
    });

    it('should change beer case GET_BEER_SUCCESS', () => {
        let state = { beer: null };
        const payload = beerSeed;
        const action = { type: GET_BEER_SUCCESS, payload };
        state = BeerReducer(state, action);
        expect(state).to.deep.equal({ beer: payload });
    }); */

});