import React, { Component } from 'react';

import MainNavBarComponent from '../../components/MainNavBar/MainNavBarComponent';
import HeaderComponent from '../../components/Header/HeaderComponent';
import BeerDetailsContainer from '../../containers/BeerDetails/BeerDetailsContainer';

class BeerDetailsPage extends Component {
    render() {
        return (
            <div>
                <header>
                    <MainNavBarComponent />
                    <HeaderComponent>
                        <main>
                            <BeerDetailsContainer />
                        </main>
                    </HeaderComponent>
                </header>
            </div>
        );
    }
}

export default BeerDetailsPage;