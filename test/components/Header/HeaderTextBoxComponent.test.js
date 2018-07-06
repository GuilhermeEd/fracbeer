import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme'

import HeaderTextBoxComponent from '../../../src/components/Header/HeaderTextBoxComponent';

describe('HeaderTextBoxComponent', () => {

    it('should exist', () => {
        const wrapper = shallow(<HeaderTextBoxComponent />);
        expect(wrapper).to.exist;
    });

    it('should have children', () => {
        const wrapper = mount(<HeaderTextBoxComponent />);
        expect(wrapper.children()).to.exist;
    })

    it('should render title correctly', () => {
        const wrapper = mount(<HeaderTextBoxComponent />);

        const title = wrapper.find('h1').text();
        expect(title).to.equal('Frac Beer');
    })

});