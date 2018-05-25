import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LandingContainer from './LandingContainer';
import NearYouContainer from './NearYouContainer';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                 <div>
                    <Switch>
                        <Route exact path = {'/'} component = {LandingContainer}/>
                        <Route path = {'/nearYou'} component = {NearYouContainer}/>
                    </Switch>
                </div>
        ) 
    }

}

AppContainer.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
