import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './pages/Home/HomePage';
import BeerDetailsPage from './pages/BeerDetails/BeerDetailsPage';

const INITIAL_STATE = {};
const store = createStore(reducers, INITIAL_STATE, applyMiddleware(ReduxThunk));

const App = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/details" component={BeerDetailsPage} />
                <Route component={HomePage} />
            </Switch>
        </Router>
    </Provider>
);

export default App;