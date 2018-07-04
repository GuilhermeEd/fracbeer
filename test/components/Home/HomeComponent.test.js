import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme'

import HomeComponent from '../../../src/components/Home/HomeComponent';

describe('HomeComponent', () => {

    it('should exist', () => {
        const wrapper = shallow(<HomeComponent />);
        expect(wrapper).to.exist;
    });

    it('should have children', () => {
        const wrapper = mount(<HomeComponent />);
        expect(wrapper.children()).to.exist;
    })

});