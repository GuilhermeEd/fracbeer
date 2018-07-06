import React, { Component } from 'react';

import './alertStyles.scss';

class AlertComponent extends Component {
    render() {
        if (!this.props.message) return null;
        return (
            <div className="alert alert-dismissible fade show floating-alert" role="alert">
                {this.props.message}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}

export default AlertComponent;