import React from 'react'; 
import PropTypes from 'prop-types';
import Rectangle from 'react-rectangle';

const BillboardGenerator = () => {
    let billboardDeals = [];
    for(let count = 0; count < 5; count++) {
        billboardDeals.push(
        <div className = "landing-billboards">
            <div className = "billboard-image">
                <Rectangle aspectRatio={[3, 3]}>
                    <div style={{ width: '100%', height: '100%' }} />
                </Rectangle>
            </div>
            <h3 className = "billboard-title"> billboard{count} </h3>
            <p> Location </p>
            <p> Traffic </p>
            <p> Price </p>
        </div>
        );
    }
    return billboardDeals
}
const Deals = () => {
    return (
        <div>
            <h3 className = "landing-header">Great Deals on Billboards in your area</h3>
            {BillboardGenerator()}
        </div>
    );
};

Deals.propTypes = {
    name: PropTypes.string,
};


export default Deals;
