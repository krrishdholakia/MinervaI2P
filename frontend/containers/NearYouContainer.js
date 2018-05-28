import React from 'react';
import PropTypes from 'prop-types';
import TopNav from '../components/TopNav';
import SortBy from '../components/SortBy';
import NearYou from '../components/NearYou';

class NearYouContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("reached")
        return (
            <div>
                <TopNav/>
                <SortBy/>
                <NearYou limit={20}/>
            </div>
        )
    }

}

export default NearYouContainer