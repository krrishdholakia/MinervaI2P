import React from 'react'; 
import PropTypes from 'prop-types';
import Rectangle from 'react-rectangle';
import BillboardInfo from './BillboardInfo';

const BillboardGenerator = (limit) => {
    console.log("limit at deals:" + limit)
    let billboardDeals = [];
    for(let count = 0; count < limit; count++) {
        billboardDeals.push(
        <div className = "landing-billboards">
            <div className = "billboard-image">
                <Rectangle aspectRatio={[3, 3]}>
                    <div style={{ width: '100%', height: '100%' }} />
                </Rectangle>
            </div>
            <h3 className = "billboard-title"> billboard{count} </h3>
            <p> Location <br/> Traffic <br/> Price </p>
            <BillboardInfo/>
        </div>
        );
    }
    return billboardDeals
}
const Deals = ({limit}) => {
    return (
        <div>
            <h3 className = "landing-header">Great Deals on Billboards in your area</h3>
            {BillboardGenerator(limit)}
        </div>
    );
};

Deals.propTypes = {
    name: PropTypes.string,
};


export default Deals;
