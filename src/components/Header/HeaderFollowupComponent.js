import React, { Component } from 'react';

import './headerStyles.scss';
import arrowDown from '../../images/arrow-down.svg';

class HeaderFollowupComponent extends Component {
    render() {
        return (
            <div className="header-followup">
                <p id="catalog-link" >{this.props.followup}</p>
                <a href="#catalog-link">
                    <img src={arrowDown} width={80} height={50} alt="Arrow Down" />
                </a>
            </div>
        );
    }
}

export default HeaderFollowupComponent;