import React, { Component } from 'react';

import ListComponent from '../List/ListComponent';

class BeerListComponent extends Component {
    render() {
        return (
            <ListComponent data={['a', 'b', 'c']}/>
        );
    }
}

export default BeerListComponent;