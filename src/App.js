import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeComponent from './components/HomeComponent';
import './styles/appStyles.scss';

const INITIAL_STATE = {};
const store = createStore(reducers, INITIAL_STATE, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={HomeComponent} />
        </Router>
    </Provider>,
    document.getElementById('app')
);