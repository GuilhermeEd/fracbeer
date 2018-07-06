import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme'

import HeaderFollowupComponent from '../../../src/components/Header/HeaderFollowupComponent';

describe('HeaderFollowupComponent', () => {

    it('should exist', () => {
        const wrapper = shallow(<HeaderFollowupComponent />);
        expect(wrapper).to.exist;
    });

    it('should have children', () => {
        const wrapper = mount(<HeaderFollowupComponent />);
        expect(wrapper.children()).to.exist;
    })

    it('should render title correctly', () => {
        const wrapper = mount(<HeaderFollowupComponent />);

        const title = wrapper.find('h1').text();
        expect(title).to.equal('Frac Beer');
    })

});