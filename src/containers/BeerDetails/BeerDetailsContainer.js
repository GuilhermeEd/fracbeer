import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import LoadingComponent from '../../components/Loading/LoadingComponent';

import { getBeer } from '../../actions/BeerActions';

import './beerDetailsStyles.scss';

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
        console.log(this.state.beer);
    }

    render() {
        if (!this.state.beer) return <LoadingComponent />;
        const { name, tagline, description, image_url } = this.state.beer;
        return (
            <div className="details-container">
                <div className="details-heading">
                    <p className="details-title">Title</p>
                    <p className="details-subtitle">Subtitle</p>
                </div>
                <div className="details-content">
                    <div className="details-img">
                        <img src={image_url} alt={name} />
                    </div>
                    <div className="details-description">
                        <p>Description...</p>
                        <Link to="/">Voltar</Link>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        beer: state.BeerReducer.beer,
    }
}

export default withRouter(connect(mapStateToProps, { getBeer })(BeerDetailsContainer));