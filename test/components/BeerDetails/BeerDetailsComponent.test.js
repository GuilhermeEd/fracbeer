import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme'

import BeerDetailsComponent from '../../../src/components/BeerDetails/BeerDetailsComponent';

describe('BeerDetailsComponent', () => {

    it('should render properly', () => {
        const wrapper = shallow(
            <BeerDetailsComponent
                title="title"
                subtitle="sub"
                img="https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg"
                description="Lorem ipsum ..."
                link="/"
            />
        );
        expect(wrapper.length).to.equal(1);
    });

});