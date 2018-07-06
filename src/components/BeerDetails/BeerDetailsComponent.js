import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './beerDetailsStyles.scss';

class BeerDetailsContainer extends Component {

    render() {
        return (
            <div className="details-container">
                <div className="details-heading">
                    <p className="details-title">{this.props.title || ''}</p>
                    <p className="details-subtitle">{this.props.subtitle || ''}</p>
                </div>
                <div className="details-content">
                    <div className="details-img">
                        <img src={this.props.img} alt={this.props.title} />
                    </div>
                    <div className="details-description">
                        <p>{this.props.description}</p>
                        <Link to={this.props.link}>{this.props.linkDescription}</Link>
                    </div>
                </div>
            </div>
        );
    }

}

export default BeerDetailsContainer;