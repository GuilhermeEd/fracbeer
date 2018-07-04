import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeComponent from './components/HomeComponent';

const INITIAL_STATE = {};
const store = createStore(reducers, INITIAL_STATE, applyMiddleware(ReduxThunk));

const App = () => (
    <Provider store={store}>
        <Router>
            <Route path="/" component={HomeComponent} />
        </Router>
    </Provider>
);

export default App;