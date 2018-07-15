import React from 'react';
import PropTypes from 'prop-types'; 
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

class SignUp extends React.Component {
  constructor(props) {
    super(props); 
    this.updateSignUpModal = this.updateSignUpModal.bind(this);
  }

  updateSignUpModal() {
    this.props.updateSignUpModal(false);
  }

  render() {
    return (
        <Modal open = {this.props.signup} onClose={this.updateSignUpModal} className="sign-up-container">
          <div>
            <Modal.Header className="modal-header">Sign Up</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <input className="sign-up-inputs" type="email" placeholder="Email Address"/>
                <input className="sign-up-inputs" type="text" placeholder="First Name"/>
                <input className="sign-up-inputs" type="text" placeholder="Last Name"/>
                <input className="sign-up-inputs" type="password" placeholder="Create Password"/>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button className="sign-up-button" onClick={this.updateSignUpModal}>
                <Icon name='checkmark' /> Join Up!
              </Button>
            </Modal.Actions>
          </div>
        </Modal>
    )
  }
}

export default SignUp; 