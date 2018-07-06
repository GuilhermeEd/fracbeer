import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme'

import MainNavBarComponent from '../../../src/components/MainNavBar/MainNavBarComponent';

describe('MainNavBarComponent', () => {

    it('should exist', () => {
        const wrapper = shallow(<MainNavBarComponent />);
        expect(wrapper).to.exist;
    });

    it('should have children', () => {
        const wrapper = mount(<MainNavBarComponent />);
        expect(wrapper.children()).to.exist;
    })

});