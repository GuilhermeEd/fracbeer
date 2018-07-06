import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import LoadingComponent from '../../components/Loading/LoadingComponent';

import { getBeer } from '../../actions/BeerActions';

class BeerDetailsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            beer: null, // name, tagline, description e image_url.
        }
    }

    async componentDidMount() {
        await this.props.getBeer(this.state.id);
        this.setState({ beer: this.props.beer });
        console.log(this.state.beer);
    }

    render() {
        return <LoadingComponent />
    }

}

const mapStateToProps = (state) => {
    return {
        beer: state.BeerReducer.beer,
    }
}

export default withRouter(connect(mapStateToProps, { getBeer })(BeerDetailsContainer));