import React, { Component } from 'react';

import './headerStyles.scss';

class HeaderTextBoxComponent extends Component {
    render() {
        return (
            <div className="hero-text-box">
                <div>
                    <img className="fracbeer-logo" src={this.props.logo} width={this.props.logoWidth} height={this.props.logoHeight} alt={`${this.props.title} Logo`} />
                </div>
                <div>
                    <h1>{this.props.title}</h1>
                    <p className="lead">{this.props.lead}</p>
                </div>
            </div>
        );
    }
}

export default HeaderTextBoxComponent;