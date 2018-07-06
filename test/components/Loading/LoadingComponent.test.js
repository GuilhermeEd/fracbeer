import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme'

import LoadingComponent from '../../../src/components/Loading/LoadingComponent';

describe('LoadingComponent', () => {

    it('should exist', () => {
        const wrapper = shallow(<LoadingComponent />);
        expect(wrapper).to.exist;
    });

    it('should have children', () => {
        const wrapper = mount(<LoadingComponent />);
        expect(wrapper.children()).to.exist;
    })

});