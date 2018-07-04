import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme'

import App from '../src/App';

describe('App', () => {

    it('should exist', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).to.exist;
    });

});