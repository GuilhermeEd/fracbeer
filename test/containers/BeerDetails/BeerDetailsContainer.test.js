import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme'

import BeerDetailsContainer from '../../../src/containers/BeerDetails/BeerDetailsContainer';

describe('BeerDetailsContainer', () => {

    it('should exist', () => {
        const wrapper = shallow(<BeerDetailsContainer />);
        expect(wrapper).to.exist;
    });

    it('should have children', () => {
        const wrapper = mount(<BeerDetailsContainer />);
        expect(wrapper.children()).to.exist;
    })

});