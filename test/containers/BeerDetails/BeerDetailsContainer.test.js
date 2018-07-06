import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../../src/reducers';

import BeerDetailsContainer from '../../../src/containers/BeerDetails/BeerDetailsContainer';

describe('BeerDetailsContainer', () => {

    it('should render properly', () => {
        const wrapper = shallow(<BeerDetailsContainer />);
        expect(wrapper.length).to.equal(1);
    });

    it('should render back link in case of error', () => {
        const wrapper = shallow(<BeerDetailsContainer />);
        wrapper.setProps({ error: 'Error message' });

        expect(wrapper.find('.center-container a')).to.exist;
    });

});