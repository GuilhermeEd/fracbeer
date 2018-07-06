import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme'

import MainNavBarComponent from '../../../src/components/MainNavBar/MainNavBarComponent';

describe('MainNavBarComponent', () => {

    it('should render properly', () => {
        const wrapper = shallow(<MainNavBarComponent />);
        expect(wrapper.length).to.equal(1);
    });

});