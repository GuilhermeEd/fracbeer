import 'jsdom-global/register';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { expect } from 'chai';
import sinon from 'sinon';

import reducers from '../../src/reducers';
import ReduxThunk from 'redux-thunk';

import { getBeerCatalog, getBeer } from '../../src/actions/BeerActions';
import { GET_BEER_CATALOG_FAIL, GET_BEER_FAIL } from '../../src/actions/types';

describe('BeerActions', () => {

    describe('getBeerCatalog', () => {

        it('should get an array of beers', async () => {

            const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
            const dispatch = sinon.spy(store, 'dispatch');
            const fn = getBeerCatalog();

            await fn(dispatch, store.getState);

            expect(dispatch.returnValues[0].payload.length > 0).to.be.true;
        });

        it('should return an error if fetch fails', async () => {
            try {
                const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
                const dispatch = sinon.stub(store, 'dispatch').onFirstCall().throwsException();

                const fn = getBeerCatalog();
                await fn(dispatch, store.getState);

            } catch (err) {
                expect(dispatch.returnValues[0].type).to.equal(GET_BEER_CATALOG_FAIL);
            }
        });

    });

    describe('getBeer', () => {

        it('should get a single beer', async () => {

            const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
            const dispatch = sinon.spy(store, 'dispatch');
            const fn = getBeer(1);

            await fn(dispatch, store.getState);

            expect(dispatch.returnValues[0].payload.id == 1).to.be.true;
        });

        it('should return an error if fetch fails', async () => {
            try {
                const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
                const dispatch = sinon.spy(store, 'dispatch');

                const fn = getBeer('x');
                await fn(dispatch, store.getState);

            } catch (err) {
                expect(dispatch.returnValues[0].type).to.equal(GET_BEER_FAIL);
            }
        });

    });

});