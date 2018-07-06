import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme'

import HeaderComponent from '../../../src/components/Header/HeaderComponent';

describe('HeaderComponent', () => {

    it('should render properly', () => {
        const wrapper = mount(
            <HeaderComponent>
                <p>child</p>
            </HeaderComponent>
        );
        expect(wrapper.length).toEqual(1);
    });

    it('should have children', () => {
        const wrapper = mount(<HeaderComponent />);
        expect(wrapper.children()).to.exist;
    });

    it('should render title correctly', () => {
        const wrapper = mount(<HeaderComponent />);

        const title = wrapper.find('h1').text();
        expect(title).to.equal('Frac Beer');
    });

});