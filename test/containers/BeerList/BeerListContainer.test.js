import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme'

import BeerListContainer from '../../../src/containers/BeerList/BeerListContainer';

describe('BeerListContainer', () => {

    it('should exist', () => {
        const wrapper = shallow(<BeerListContainer />);
        expect(wrapper).to.exist;
    });

    it('should have children', () => {
        const wrapper = mount(<BeerListContainer />);
        expect(wrapper.children()).to.exist;
    })

});