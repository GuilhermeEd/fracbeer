import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


import BeerDetailsComponent from '../../components/BeerDetails/BeerDetailsComponent';
import LoadingComponent from '../../components/Loading/LoadingComponent';

import { getBeer } from '../../actions/BeerActions';

class BeerDetailsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            beer: null,
        }
    }

    async componentDidMount() {
        await this.props.getBeer(this.state.id);
        this.setState({ beer: this.props.beer });
    }

    render() {
        if (!this.state.beer) return <LoadingComponent />;
        const { name, tagline, description, image_url } = this.state.beer;
        return (
            <BeerDetailsComponent
                title={name}
                subtitle={tagline}
                img={image_url}
                description={description}
                link={'/'}
                linkDescription='Voltar'
            />
        );
    }

}

const mapStateToProps = (state) => {
    return {
        beer: state.BeerReducer.beer,
    }
}

export default withRouter(connect(mapStateToProps, { getBeer })(BeerDetailsContainer));