import React, { Component } from 'react';

import BeerComponent from '../Beer/BeerComponent';
import ListComponent from '../List/ListComponent';

class BeerListComponent extends Component {
    render() {
        return (
            <ListComponent data={[<BeerComponent/>, <BeerComponent/>, <BeerComponent/>]}/>
        );
    }
}

export default BeerListComponent;