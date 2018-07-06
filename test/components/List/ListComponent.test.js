import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme'

import ListComponent from '../../../src/components/List/ListComponent';

describe('ListComponent', () => {

    it('should render properly', () => {
        const wrapper = shallow(
            <ListComponent data={['a', 'b', 'c']} />
        );
        expect(wrapper.length).to.equal(1);
    });

    it('should have children', () => {
        const wrapper = mount(<ListComponent />);
        expect(wrapper.children()).to.exist;
    })

});