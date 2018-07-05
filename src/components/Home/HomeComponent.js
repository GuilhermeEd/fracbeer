import React, { Component } from 'react';

import MainNavBarComponent from '../MainNavBar/MainNavBarComponent';
import HeaderComponent from '../Header/HeaderComponent';
import BeerListComponent from '../BeerList/BeerListComponent';

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <MainNavBarComponent />
                    <HeaderComponent />
                </header>
                <main className="container">
                    <BeerListComponent />
                </main>
            </div>
        );
    }
}

export default HomeComponent;