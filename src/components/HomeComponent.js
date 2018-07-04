import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBeerCatalog } from '../actions/BeerActions';

class HomeComponent extends Component {
    componentDidMount() {
        this.props.getBeerCatalog();
    }
    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}

export default connect(null, { getBeerCatalog })(HomeComponent);