import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import LandingContainer from './LandingContainer';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <LandingContainer/>; 
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
