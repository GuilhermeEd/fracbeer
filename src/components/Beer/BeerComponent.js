import React, { Component } from 'react';

import './beerStyles.scss';

class BeerComponent extends Component {
    render() {
        return (
            <div className="beer-item">
                <p>{this.props.name}</p>
                <p>{this.props.tagline}</p>
            </div>
        );
    }
}

export default BeerComponent;