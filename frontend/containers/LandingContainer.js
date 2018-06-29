import React from 'react';
import PropTypes from 'prop-types';
import TopNav from '../components/TopNav';
import NearYou from '../components/NearYou';
import Deals from '../components/Deals';
import Popular from '../components/Popular';
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
                <NearYou limit={3}/>
                <Deals limit={3}/>
                <Popular limit={3}/>
            </div>
        );
    }
}

export default LandingContainer