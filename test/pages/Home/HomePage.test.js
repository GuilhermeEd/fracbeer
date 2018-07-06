import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme'

import configureStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';

import HomePage from '../../../src/pages/Home/HomePage';

const initialState = { BeerReducer: { error: 'Error Message' } };
const store = configureStore([ReduxThunk])(initialState);

describe('HomePage', () => {

    it('should render properly', () => {
        const wrapper = shallow(<HomePage store={store} />).dive();
        expect(wrapper.find('Connect(HomePage)')).to.exist;
    });

});