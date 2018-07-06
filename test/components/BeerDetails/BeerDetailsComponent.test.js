import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme'

import BeerDetailsComponent from '../../../src/components/BeerDetails/BeerDetailsComponent';

describe('BeerDetailsComponent', () => {

    it('should exist', () => {
        const wrapper = shallow(<BeerDetailsComponent />);
        expect(wrapper).to.exist;
    });

    it('should have children', () => {
        const wrapper = mount(<BeerDetailsComponent />);
        expect(wrapper.children()).to.exist;
    })

});