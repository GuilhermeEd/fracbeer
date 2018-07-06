import React, { Component } from 'react';
import { connect } from 'react-redux';

import BeerComponent from '../../components/Beer/BeerComponent';
import ListComponent from '../../components/List/ListComponent';

import { getBeerCatalog } from '../../actions/BeerActions';

class BeerListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            beers: null,
        };
    }

    async componentDidMount() {
        await this.props.getBeerCatalog();
        const beers = this.props.catalog.map((beer) => {
            return <BeerComponent id={beer.id} name={beer.name} tagline={beer.tagline} />
        });
        this.setState({ beers });
    }

    render() {
        return (
            <ListComponent data={this.state.beers} />
        );
    }

}

const mapStateToProps = (state) => {
    return {
        catalog: state.BeerReducer.catalog,
    }
}

export default connect(mapStateToProps, { getBeerCatalog })(BeerListContainer);