import React from 'react';
import PropTypes from 'prop-types';
import TopNav from '../components/TopNav';
import NearYou from '../components/NearYou';
import Deals from '../components/Deals';
import Popular from '../components/Popular';
import Explore from '../components/Explore';
import * as signupActions from '../actions/signup'



import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LandingContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("reaches Landing Container")
        return (
            <div>
                <TopNav signout={this.props.signout}/>
                <Explore/>
                <NearYou limit={3}/>
                <Deals limit={3}/>
                <Popular limit={3}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("state: "+ state)
    return {
        signout: state.signout
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(signupActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);