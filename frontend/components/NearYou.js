import React from 'react'; 
import PropTypes from 'prop-types';

const BillboardGenerator = () => {
    let billboardNearYou = [];
    for(let count = 0; count < 5; count++) {
        billboardNearYou.push(
        <div className = "landing-billboards">
            <h3 className = "billboard-title"> billboard{count} </h3>
            <p> Location </p>
            <p> Traffic </p>
            <p> Price </p>
        </div>
        );
    }
    return billboardNearYou
}
const NearYou = () => {
    return (
        <div>
            <h3 className = "landing-header">Billboards Near You</h3>
            {BillboardGenerator()}
        </div>
    );
};

NearYou.propTypes = {
    name: PropTypes.string,
};


export default NearYou;
