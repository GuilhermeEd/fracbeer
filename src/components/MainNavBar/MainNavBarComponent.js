import React, { Component } from 'react';

import './mainNavBarStyles.scss';

class MainNavBarComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky">
                <a className="navbar-brand color-hover-link" href="/">FracBeer</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li>
                            <a className="nav-item nav-link active underline-hover-link" href="/">Catalog <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default MainNavBarComponent;