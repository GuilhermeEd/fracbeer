import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainNavBarComponent from '../../components/MainNavBar/MainNavBarComponent';
import HeaderComponent from '../../components/Header/HeaderComponent';
import BeerDetailsContainer from '../../containers/BeerDetails/BeerDetailsContainer';
import AlertComponent from '../../components/Alert/AlertComponent';

class BeerDetailsPage extends Component {
    render() {
        return (
            <div>
                <AlertComponent message={this.props.error} />
                <header>
                    <MainNavBarComponent />
                    <HeaderComponent style={{ display: 'block' }}>
                        <main className="container">
                            <BeerDetailsContainer />
                        </main>
                    </HeaderComponent>
                </header>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.BeerReducer.error,
    }
}

export default connect(mapStateToProps)(BeerDetailsPage);