import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme'

import HeaderFollowupComponent from '../../../src/components/Header/HeaderFollowupComponent';

describe('HeaderFollowupComponent', () => {

    it('should render properly', () => {
        const wrapper = shallow(
            <HeaderFollowupComponent followup="followup message"/>
        );
        expect(wrapper.length).toEqual(1);
    });

});