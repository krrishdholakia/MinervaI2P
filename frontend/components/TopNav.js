import React from 'react';
import PropTypes from 'prop-types'; 
// import {Navbar, FormGroup, FormControl, Button, NavItem, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import SignUp from './SignUp';
import BillboardSelling from './BillboardSelling';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header, Image, Modal, Button } from 'semantic-ui-react'
import signup from '../reducers/signup';

class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.onSignUp = this.onSignUp.bind(this);
        this.onBillboardSell = this.onBillboardSell.bind(this);
      }
    
    onSignUp() {
        this.props.updateSignUpModal(true);
    }

    onBillboardSell() {
        this.props.updateSellModal(true); 
    }
    
    render() {
        return (
        <div>
            <Link to='/'> <h3 className="brand-name">Minerva</h3> </Link>
            <input className="search-bar" type="text" placeholder="Find a billboard"/>
            <p className="nav-links" onClick={this.onBillboardSell}> Sell a billboard </p>
            <p className="nav-links"  onClick={this.onSignUp}> Sign Up </p>
            <p className="nav-links"> Login </p>
            <SignUp signup={this.props.signup} updateSignUpModal={this.props.updateSignUpModal}/>
            <BillboardSelling onsell={this.props.onsell} updateSellModal={this.props.updateSellModal}/>
        </div>
        );
    }
}

TopNav.propTypes = {
    name: PropTypes.string,
};

export default TopNav;