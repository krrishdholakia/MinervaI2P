import React from 'react'; 
import PropTypes from 'prop-types';
import Rectangle from 'react-rectangle';

const BillboardGenerator = (limit) => {
    console.log(limit)
    let billboardNearYou = [];
    for(let count = 0; count < limit; count++) {
        billboardNearYou.push(
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
    return billboardNearYou
}
const NearYou = ({limit}) => {
    console.log(limit)
    return (
        <div>
            <h3 className = "landing-header">Billboards Near You</h3>
            {BillboardGenerator(limit)}
        </div>
    );
};

NearYou.propTypes = {
    name: PropTypes.string,
};


export default NearYou;
