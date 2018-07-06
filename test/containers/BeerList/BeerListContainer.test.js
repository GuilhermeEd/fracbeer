import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme'

import configureStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';
import { catalog } from './BeerListContainer.seed';

import BeerListContainer from '../../../src/containers/BeerList/BeerListContainer';

const initialState = { BeerReducer: { catalog } };
const store = configureStore([ReduxThunk])(initialState);

describe('BeerListContainer', () => {

    it('should render properly', () => {
        const wrapper = shallow(<BeerListContainer store={store} />).dive();
        expect(wrapper.find('Connect(BeerListContainer)')).to.exist;
    });

});