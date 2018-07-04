import React, { Component } from 'react';

import './headerStyles.scss';
import logo from '../../images/fracbeer-logo.svg';

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky">
                    <img className="fracbeer-logo" src={logo} width="60" height="60" alt="FracBeer Logo" />
                    <a className="navbar-brand color-hover-link" href="/">FracBeer</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active underline-hover-link" href="/">Catalog <span className="sr-only">(current)</span></a>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent;