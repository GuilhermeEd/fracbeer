import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme'

import BeerComponent from '../../../src/components/Beer/BeerComponent';

describe('BeerComponent', () => {

    it('should render properly', () => {
        const wrapper = shallow(<BeerComponent name="name" tagline="tagline" />);
        expect(wrapper.length).to.equal(1);
    });
    
});