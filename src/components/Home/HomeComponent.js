import React, { Component } from 'react';

import MainNavBarComponent from '../MainNavBar/MainNavBarComponent';
import HeaderComponent from '../Header/HeaderComponent';

class HomeComponent extends Component {
    render() {
        return (
            <header>
                <MainNavBarComponent />
                <HeaderComponent />
            </header>
        );
    }
}

export default HomeComponent;