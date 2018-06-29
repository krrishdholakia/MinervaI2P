import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NearYouContainer from '../containers/NearYouContainer';
import {LinkContainer} from 'react-router-bootstrap'

const Explore = () => {
    return (
        <div style={{height:'7em'}}>
            <Link to = "/nearYou"> <h3 className="explore-tabs"> Near You </h3> </Link>
            <Link to = "/deals"> <h3 className="explore-tabs"> Deals </h3> </Link>
            <Link to = "/popular"> <h3 className="explore-tabs"> Popular </h3> </Link>
        </div>
    );
}

export default Explore