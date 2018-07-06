import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme'

import BeerDetailsPage from '../../../src/pages/BeerDetails/BeerDetailsPage';

describe('BeerDetailsPage', () => {

    it('should exist', () => {
        const wrapper = shallow(<BeerDetailsPage />);
        expect(wrapper).to.exist;
    });

    it('should have children', () => {
        const wrapper = mount(<BeerDetailsPage />);
        expect(wrapper.children()).to.exist;
    })

});