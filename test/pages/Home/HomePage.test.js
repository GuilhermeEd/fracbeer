import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme'

import HomePage from '../../../src/components/Home/HomePage';

describe('HomePage', () => {

    it('should exist', () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper).to.exist;
    });

    it('should have children', () => {
        const wrapper = mount(<HomePage />);
        expect(wrapper.children()).to.exist;
    })

});