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
             <form className="form-horizontal">
               <div className="form-group">
                 <label className="col-md-2 control-label">Название</label>
                 <div className="col-md-10">
                   <input type="text" className="form-control" value="" />
                 </div>
               </div>

               <div className="form-group">
                 <label className="col-md-2 control-label">Описание</label>
                 <div className="col-md-10">
                   <textarea className="form-control" rows="2"></textarea>
                 </div>
               </div>

               <div className="form-group">
                 <label className="col-md-2 control-label">Бюджет</label>
                 <div className="col-md-10">
                   <input type="text" className="form-control" placeholder="" />
                 </div>
               </div>
               <div className="form-group">
                 <label className="col-md-2 control-label">Сроки </label>
                 <div className="col-md-10">
                   <input type="text" className="form-control" placeholder="" />
                 </div>
               </div>

               <div className="form-group">
                 <label className="col-md-2 control-label">Заказчик</label>
                 <div className="col-md-10">
                   <input type="text" className="form-control" value="" />
                 </div>
               </div>

               <div className="form-group">
                 <label className="col-md-2 control-label">Телефон</label>
                 <div className="col-md-10">
                   <input type="text" className="form-control" value="" />
                 </div>
               </div>


               <div className="form-group">
                 <label className="col-md-2 control-label" for="example-email">Email</label>
                 <div className="col-md-10">
                   <input type="email" id="example-email" name="example-email" className="form-control" placeholder="" />
                 </div>
               </div>

               <div className="form-group">
                 <label className="col-md-2 control-label">Город</label>
                 <div className="col-md-10">
                   <input type="text" className="form-control" value="" />
                 </div>
               </div>



             </form>
           </Modal.Body>
           <Modal.Footer>
             <Button onClick={::this.closeModal}>Отмена</Button>
           </Modal.Footer>
         </Modal>

      );
  }
}