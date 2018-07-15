import React from 'react';
import PropTypes from 'prop-types';
import TopNav from '../components/TopNav';
import NearYou from '../components/NearYou';
import Deals from '../components/Deals';
import Popular from '../components/Popular';
import Explore from '../components/Explore';
import * as signupActions from '../actions/listing'
import * as billboardActions from '../actions/billboardbuying'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LandingContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("reaches Landing Container")
        console.log("updateSignUpModal: " + this.props.updateSignUpModal)
        console.log("onBillboardClick: " + this.props.onBillboardClick)
        return (
            <div>
                <TopNav updateSignUpModal={this.props.updateSignUpModal} signup={this.props.signup} updateSellModal={this.props.updateSellModal} onsell={this.props.onsell}/>
                <Explore/>
                <NearYou limit={3} onBillboardClick={this.props.onBillboardClick} screenstate={this.props.billboardClick}/>
                <Deals limit={3}/>
                <Popular limit={3}/>
            </div>
        );
    }
}

LandingContainer.propTypes = {
    signup : PropTypes.bool.isRequired, 
};

const mapStateToProps = (state) => {
    console.log("state.signup.signUp: " + state.signup.signUp)
    console.log("state.billboardbuying.billboardClick: " + state.billboardbuying.billboardClick)

    return {
        signup: state.signup.signUp,
        onsell: state.signup.onsell,
        billboardClick: state.billboardbuying.billboardClick
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Object.assign({}, signupActions, billboardActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);