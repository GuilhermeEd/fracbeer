import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme'

import HomeComponent from '../../src/components/HomeComponent';

describe('HomeComponent', () => {

    it('should exist', () => {
        const wrapper = shallow(<HomeComponent />);
        expect(wrapper).to.exist;
    });
    
});