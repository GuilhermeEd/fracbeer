import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme'

import App from '../src/App';

describe('App', () => {

    it('should exist', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).to.exist;
    });

    it('should have children', () => {
        const wrapper = mount(<App />);
        expect(wrapper.children()).to.exist;
    })

});