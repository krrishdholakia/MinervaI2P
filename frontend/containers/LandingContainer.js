import React from 'react';
import PropTypes from 'prop-types';
import TopNav from '../components/TopNav';
import NearYou from '../components/NearYou';
import Deals from '../components/Deals';
import Trending from '../components/Trending';
import Explore from '../components/Explore';

class LandingContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("reaches Landing Container")
        return (
            <div>
                <TopNav/>
                <Explore/>
                <NearYou limit={5}/>
                <Deals/>
                <Trending/>
            </div>
        );
    }
}

export default LandingContainer