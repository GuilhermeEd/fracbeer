import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme'

import HeaderComponent from '../../../src/components/Header/HeaderComponent';

describe('HeaderComponent', () => {

    it('should exist', () => {
        const wrapper = shallow(<HeaderComponent />);
        expect(wrapper).to.exist;
    });

});