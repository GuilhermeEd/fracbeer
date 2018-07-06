import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme'

import HeaderComponent from '../../../src/components/Header/HeaderComponent';

describe('HeaderComponent', () => {

    it('should render properly', () => {
        const wrapper = shallow(
            <HeaderComponent>
                <p>child</p>
            </HeaderComponent>
        );
        expect(wrapper.length).to.equal(1);
    });

    it('should have children', () => {
        const wrapper = mount(<HeaderComponent />);
        expect(wrapper.children()).to.exist;
    });

});