import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainNavBarComponent from '../../components/MainNavBar/MainNavBarComponent';
import HeaderComponent from '../../components/Header/HeaderComponent';
import HeaderTextBoxComponent from '../../components/Header/HeaderTextBoxComponent';
import HeaderFollowupComponent from '../../components/Header/HeaderFollowupComponent';
import BeerListContainer from '../../containers/BeerList/BeerListContainer';
import AlertComponent from '../../components/Alert/AlertComponent';

import logo from '../../images/fracbeer-logo.svg';

class HomePage extends Component {
    render() {
        return (
            <div>
                <AlertComponent message={this.props.error} />
                <header>
                    <MainNavBarComponent />
                    <HeaderComponent>
                        <HeaderTextBoxComponent
                            logo={logo}
                            logoWidth={100}
                            logoHeight={200}
                            title={'Frac Beer'}
                            lead={'Have a sip'}
                        />
                        <HeaderFollowupComponent
                            followup="Checkout the best of the best"
                        />
                    </HeaderComponent>
                </header>
                <main className="container">
                    <BeerListContainer />
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.BeerReducer.error,
    }
}

export default connect(mapStateToProps)(HomePage);