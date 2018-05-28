import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './AppContainer.js';
import DevTools from './DevTools';
import { BrowserRouter } from 'react-router-dom'
export default function Root({ store }) {
    return (
        <Provider store={store}>
                <BrowserRouter>
                        <AppContainer />
                        {/* <DevTools /> */}
                </BrowserRouter>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
