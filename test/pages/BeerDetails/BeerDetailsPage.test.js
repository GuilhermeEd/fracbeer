import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme'

import configureStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';

import BeerDetailsPage from '../../../src/pages/BeerDetails/BeerDetailsPage';

const initialState = { BeerReducer: { error: 'Error Message' } };
const store = configureStore([ReduxThunk])(initialState);

describe('BeerDetailsPage', () => {

    it('should render properly', () => {
        const wrapper = shallow(<BeerDetailsPage store={store} />).dive();
        expect(wrapper.find('Connect(BeerDetailsPage)')).to.exist;
    });

});