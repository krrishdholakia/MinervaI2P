import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NearYouContainer from '../containers/NearYouContainer';
import {LinkContainer} from 'react-router-bootstrap'

const Explore = () => {
    return (
        <Router>
        <div>
            <h3 className="explore-tabs"> <Link to = "/nearYou"> Near You </Link> </h3>
            <h3 className="explore-tabs"> Deals </h3> 
            <h3 className="explore-tabs"> Popular </h3> 
        </div>
        </Router>
    );
}

export default Explore