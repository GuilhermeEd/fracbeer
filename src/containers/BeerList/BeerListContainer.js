import React, { Component } from 'react';
import { connect } from 'react-redux';

import BeerComponent from '../../components/Beer/BeerComponent';
import ListComponent from '../../components/List/ListComponent';

class BeerListContainer extends Component {
    render() {
        return (
            <ListComponent />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps, {  })(BeerListContainer);