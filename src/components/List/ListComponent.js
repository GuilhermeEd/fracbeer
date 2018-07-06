import React, { Component } from 'react';

import './listStyles.scss';
import activityIndicator from '../../images/loading.gif';

class ListComponent extends Component {

    constructor(props) {
        super(props);
        this._renderItems = this._renderItems.bind(this);
    }

    _renderItems() {
        if (!this.props.data) {
            return (
                <li className="list-group-item">
                    <img className="activity-indicator" src={activityIndicator} alt="Loading" />
                </li>
            );
        }
        return this.props.data.map((item, i) => {
            <li className="list-group-item" key={item.id || i}>
                {item}
            </li>
        });
    }

    render() {
        return (
            <ul className="list-group list-group-flush dark-list">
                {this._renderItems()}
            </ul>
        );
    }

}

export default ListComponent;