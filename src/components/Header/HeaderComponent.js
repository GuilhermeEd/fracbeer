import React, { Component } from 'react';

import './headerStyles.scss';
import logo from '../../images/fracbeer-logo.svg';
import arrowDown from '../../images/arrow-down.svg';

class HeaderComponent extends Component {
    render() {
        return (
            <div className="header-hero">
                <div className="hero-text-box">
                    <div>
                        <img className="fracbeer-logo" src={logo} width={100} height={200} alt="FracBeer Logo" />
                    </div>
                    <div>
                        <h1>Frac Beer</h1>
                        <p className="lead">Have a sip</p>
                    </div>
                </div>
                <div className="header-followup">
                    <p>Checkout the best of the best</p>
                    <img src={arrowDown} width={80} height={50} alt="Arrow Down" />
                </div>
            </div>
        );
    }
}

export default HeaderComponent;