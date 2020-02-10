import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
// Custom components
import ErrorBoundary from './components/errorBoundry/ErrorBoundry'
import App from './components/App'
import {store, persistor} from './store';

import './components/assets/js/scripts.js'
import './components/assets/js/doughnut.js'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ErrorBoundary>
                <Router>
                    <App/>
                </Router>
            </ErrorBoundary>
        </PersistGate>
    </Provider>
, document.getElementById('root'))