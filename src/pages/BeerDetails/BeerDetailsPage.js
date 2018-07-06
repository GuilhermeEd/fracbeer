import React, { Component } from 'react';

import MainNavBarComponent from '../../components/MainNavBar/MainNavBarComponent';
import HeaderComponent from '../../components/Header/HeaderComponent';

class BeerDetailsPage extends Component {
    render() {
        return (
            <div>
                <header>
                    <MainNavBarComponent />
                    <HeaderComponent>
                        <main>
                            
                        </main>
                    </HeaderComponent>
                </header>
            </div>
        );
    }
}

export default BeerDetailsPage;