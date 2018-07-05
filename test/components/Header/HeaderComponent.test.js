import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme'

import HeaderComponent from '../../../src/components/Header/HeaderComponent';

describe('HeaderComponent', () => {

    it('should exist', () => {
        const wrapper = shallow(<HeaderComponent />);
        expect(wrapper).to.exist;
    });

    it('should have children', () => {
        const wrapper = mount(<HeaderComponent />);
        expect(wrapper.children()).to.exist;
    })

    it('should render title correctly', () => {
        const wrapper = mount(<HeaderComponent />);

        const title = wrapper.find('h1').text();
        expect(title).to.equal('Frac Beer');
    })

});