import React from 'react';
import PropTypes from 'prop-types'; 
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { compose, withProps } from "recompose";
import Rectangle from 'react-rectangle';
import Avatar from 'react-avatar';

const MyMapComponent = compose(
    withProps({
      /**
       * Note: create and replace your own key in the Google console.
       * https://console.developers.google.com/apis/dashboard
       * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
       */
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDuvasc2qO6dqeLJFlLRTl5uGwLaJQ6BEg&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `300px` }} />,
      mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
  )(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      )}
    </GoogleMap>
  ));


const headerStyle = {
  paddingTop: '0px',
  paddingBottom: '0px', 
  fontFamily: 'Futura',
  fontWeight: 'lighter'
};

const BillboardInfo = () => {
    return (
        <Modal trigger={<Button>Check it out!</Button>} basic size='small'>
            <Header icon='compass' content='Buckhead · Atlanta, Georgia' style={headerStyle}/>
                <Modal.Content>
                    <div className="billboard-flex-superparent">
                        <div className="billboard-flex-parent">
                            <div className="billboard-image-modal">
                                <Rectangle aspectRatio={[10, 10]}>
                                    <div style={{ width: '100%', height: '100%' }} />
                                </Rectangle>
                            </div>
                            <div className="map-modal">
                                <MyMapComponent isMarkerShown />
                            </div>
                        </div>
                        <div className="billboard-flex-parent">
                            <div className="billboard-seller">
                                <Avatar name="Foo Bar" round={true} size = {150}/>
                                <div className="contact-seller"> 
                                    <h3> Meet Frank! </h3>
                                    <Button fluid style={{fontFamily: 'Futura', fontWeight: 'lighter'}}> Contact Frank </Button>
                                </div>
                            </div>
                            <div className="billboard-seller-reviews">
                                    <h3> 10 Reviews ★★★★☆ </h3>
                                    <div className="billboard-seller-reviews-categories">
                                        <p> Communication ★★★☆☆ </p>
                                        <p> Value ★★★★☆ </p>
                                        <p> Location ★★★☆☆ </p>
                                    </div>
                            </div>
                            <div className="billboard-categories">
                                <h3> Popular billboard categories near this </h3> 
                                <div className="billboard-category-types"> 
                                    <h3 className="billboard-category-type"> Beauty & Wellness </h3> 
                                    <h3 className="billboard-category-type"> Law </h3> 
                                    <h3 className="billboard-category-type"> Politics </h3> 
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Content>
        </Modal>
    )
}

export default BillboardInfo;