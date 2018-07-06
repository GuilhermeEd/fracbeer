import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme'

import BeerComponent from '../../../src/components/Beer/BeerComponent';

describe('BeerComponent', () => {

    it('should exist', () => {
        const wrapper = shallow(<BeerComponent />);
        expect(wrapper).to.exist;
    });

    it('should have children', () => {
        const wrapper = mount(<BeerComponent />);
        expect(wrapper.children()).to.exist;
    })

});