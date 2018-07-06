import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme'

import LoadingComponent from '../../../src/components/Loading/LoadingComponent';

describe('LoadingComponent', () => {

    it('should render properly', () => {
        const wrapper = shallow(<LoadingComponent />);
        expect(wrapper.length).to.equal(1);
    });

});