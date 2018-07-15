import React from 'react';
import PropTypes from 'prop-types'; 
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

class BillboardSelling extends React.Component {
  constructor(props) {
    super(props); 
    this.updateSellModal = this.updateSellModal.bind(this);
  }

  updateSellModal() {
    this.props.updateSellModal(false);
  }

  render() {
    return (
        <Modal open = {this.props.onsell} onClose={this.updateSellModal} className="sign-up-container">
          <div>
            <Modal.Header className="modal-header">Welcome to the Minerva Host Family</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <input className="sign-up-inputs" type="text" placeholder="Location"/>
                <input className="sign-up-inputs" type="text" placeholder="Price per day"/>
                <input className="sign-up-inputs" type="text" placeholder="Is this all legal?"/>
                <input className="sign-up-inputs" type="text" placeholder="Image upload"/>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button className="sign-up-button" onClick={this.updateSellModal}>
                <Icon name='checkmark' /> Join Up!
              </Button>
            </Modal.Actions>
          </div>
        </Modal>
    )
  }
}

export default BillboardSelling; 