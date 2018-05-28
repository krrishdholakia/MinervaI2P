import React from 'react';
import PropTypes from 'prop-types'; 
import {Navbar, FormGroup, FormControl, Button, NavItem, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const TopNav = () => {
    return (
        <div>
            <Link to='/'> <h3 className="brand-name">Minerva</h3> </Link>
            <input className="search-bar" type="text" placeholder="Find a billboard"/>
            <p className="nav-links"> Sell a billboard </p>
            <p className="nav-links"> Sign Up </p>
            <p className="nav-links"> Login </p>
        </div>
    );
};

TopNav.propTypes = {
    name: PropTypes.string,
};


export default TopNav;
