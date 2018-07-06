import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme'

import ListComponent from '../../../src/components/List/ListComponent';

describe('ListComponent', () => {

    it('should exist', () => {
        const wrapper = shallow(<ListComponent />);
        expect(wrapper).to.exist;
    });

    it('should have children', () => {
        const wrapper = mount(<ListComponent />);
        expect(wrapper.children()).to.exist;
    })

});