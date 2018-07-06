import React, { Component } from 'react';

import MainNavBarComponent from '../MainNavBar/MainNavBarComponent';
import HeaderComponent from '../Header/HeaderComponent';
import BeerListContainer from '../../containers/BeerList/BeerListContainer';

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <MainNavBarComponent />
                    <HeaderComponent />
                </header>
                <main className="container">
                    <BeerListContainer />
                </main>
            </div>
        );
    }
}

export default HomeComponent;