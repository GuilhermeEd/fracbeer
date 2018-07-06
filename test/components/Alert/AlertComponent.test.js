import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme'

import AlertComponent from '../../../src/components/Alert/AlertComponent';

describe('AlertComponent', () => {

    it('should exist', () => {
        const wrapper = shallow(<AlertComponent />);
        expect(wrapper).to.exist;
    });

    it('should have children', () => {
        const wrapper = mount(<AlertComponent />);
        expect(wrapper.children()).to.exist;
    })

});