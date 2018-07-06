import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme'

import AlertComponent from '../../../src/components/Alert/AlertComponent';

describe('AlertComponent', () => {

    it('should render properly', () => {
        const wrapper = shallow(<AlertComponent message="test" />);
        expect(wrapper.length).to.equal(1);
    });

});