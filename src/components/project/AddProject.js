import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';


export default class AddProject extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }


  openModal(e) {
    e.preventDefault();
    this.props.actionApp.openModal("newProject");
  }

  closeModal(e) {
    this.props.actionApp.closeModal("newProject");
  }

  render() {
      return (
          <Modal show={this.props.modals.newProject} onHide={::this.closeModal}>
           <Modal.Header closeButton>
             <Modal.Title>Новый проект</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <h4>Text in a modal</h4>
             <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>


             <hr />

             <h4>Overflowing text to show scroll behavior</h4>
             <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
             <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
             <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
             <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
             <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
             <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
           </Modal.Body>
           <Modal.Footer>
             <Button onClick={::this.closeModal}>Close</Button>
           </Modal.Footer>
         </Modal>

      );
  }
}
