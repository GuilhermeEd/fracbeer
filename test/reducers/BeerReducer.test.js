import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { GET_BEER_SUCCESS } from '../../src/actions/types';

import { beerSeed } from './BeerReducer.seed';
import BeerReducer from '../../src/reducers/BeerReducer';

describe('BeerReducer', () => {

    it('should change beer when GET_BEER_SUCCESS is matched', () => {
        let state = { beer: null };
        const payload = beerSeed;
        const action = { type: GET_BEER_SUCCESS, payload };
        state = BeerReducer(state, action);
        expect(state).to.deep.equal({ beer: payload });
    });

});