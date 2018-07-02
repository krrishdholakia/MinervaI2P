import React from 'react';
import PropTypes from 'prop-types'; 
import {Navbar, FormGroup, FormControl, Button, NavItem, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import SignUp from './SignUp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
    
    handleClick() {
        // console.log("signUp value1:" + this.props.signup);
        // this.props.signUpModal(true);
        this.props.signout(false);
        console.log("signout: " + this.props.signout)
        console.log('Click happened');
        // console.log("signUp value2:" + this.props.signup);
    }
    render() {
        return (
        <div>
            <Link to='/'> <h3 className="brand-name">Minerva</h3> </Link>
            <input className="search-bar" type="text" placeholder="Find a billboard"/>
            <p className="nav-links" onClick={this.handleClick}> Sell a billboard </p>
            <p className="nav-links"> Sign Up </p>
            <p className="nav-links"> Login </p>
        </div>
        );
    }
}

TopNav.propTypes = {
    name: PropTypes.string,
};




// export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
export default TopNav;