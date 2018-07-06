import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme'

import HeaderTextBoxComponent from '../../../src/components/Header/HeaderTextBoxComponent';

describe('HeaderTextBoxComponent', () => {

    it('should render properly', () => {
        const wrapper = shallow(
            <HeaderTextBoxComponent
                title="Title"
                lead="Subtitle"
                logo="https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg"
                logoWidth={50}
                logoHeight={50}
            />
        );
        expect(wrapper.length).toEqual(1);
    });

    it('should render title correctly', () => {
        const wrapper = shallow(
            <HeaderTextBoxComponent
                title="Frac Beer"
                lead="Subtitle"
                logo="https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg"
                logoWidth={50}
                logoHeight={50}
            />
        );

        const title = wrapper.find('h1').text();
        expect(title).to.equal('Frac Beer');
    })

});