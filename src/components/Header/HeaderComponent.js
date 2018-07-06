import React, { Component } from 'react';

import './headerStyles.scss';

class HeaderComponent extends Component {
    render() {
        return (
            <div className="header-hero" style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

export default HeaderComponent;