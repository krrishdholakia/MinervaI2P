import React from 'react'; 
import PropTypes from 'prop-types';
import Rectangle from 'react-rectangle';
import BillboardInfo from './BillboardInfo';

// const handleClick = (onBillboardClick) {
//     return onBillboardClick(true);
// }

// const BillboardGenerator = (limit) => {
//     console.log(limit)
//     let billboardNearYou = [];
//     for(let count = 0; count < limit; count++) {
//         billboardNearYou.push(
//         <div className = "landing-billboards" onClick={handleClick()}>
//             <div className = "billboard-image">
//                 <Rectangle aspectRatio={[3, 3]}>
//                     <div style={{ width: '100%', height: '100%' }} />
//                 </Rectangle>
//             </div>
//             <h3 className = "billboard-title"> billboard{count} </h3>
//             <p> Location <br/> Traffic <br/> Price </p>
//             <BillboardInfo/>
//     </div>
//     );
//     }
//     return billboardNearYou
// }
// const NearYou = ({limit}) => {
//     return (
//         <div>
//             <h3 className = "landing-header">Billboards Near You</h3>
//             {BillboardGenerator(limit)}
//         </div>
//     );
// };

class NearYou extends React.Component {
    constructor(props) {
        super(props); 
        this.handleClick = this.handleClick.bind(this)
        this.BillboardGenerator = this.BillboardGenerator.bind(this)
    }

    handleClick() {
        this.props.onBillboardClick(true)
    }

    BillboardGenerator() {
        console.log(this.props.limit)
        let billboardNearYou = [];
        for(let count = 0; count < this.props.limit; count++) {
            billboardNearYou.push(
            <div className = "landing-billboards" onClick={this.handleClick}>
                <div className = "billboard-image">
                    <Rectangle aspectRatio={[3, 3]}>
                        <div style={{ width: '100%', height: '100%' }} />
                    </Rectangle>
                </div>
                <h3 className = "billboard-title"> billboard{count} </h3>
                <p> Location <br/> Traffic <br/> Price </p>
                <BillboardInfo screenstate={this.props.screenstate} onBillboardClick={this.props.onBillboardClick}/>
        </div>
        );
        }
        return billboardNearYou
    }

    render() {
        return (
            <div>
                <h3 className = "landing-header">Billboards Near You</h3>
                {this.BillboardGenerator()}
            </div>
        );
    }

}

NearYou.propTypes = {
    name: PropTypes.string,
};


export default NearYou;
