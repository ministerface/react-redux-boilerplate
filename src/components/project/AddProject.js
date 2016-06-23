import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';


export default class AddProject extends Component {
  constructor(props){
    super(props);
  }

  openModal(e) {
    e.preventDefault();
    this.props.actionApp.openModal("newProject");
  }

  closeModal(e) {
    this.props.actionApp.closeModal("newProject");
  }

  addProject(e) {
    const { name, description, budget, range, customer, phone, email, city } = this.refs;
    this.props.actionProjects.addProject(
      name.value,
      description.value,
      budget.value,
      range.value,
      customer.value,
      phone.value,
      email.value,
      city.value
     );
     this.props.actionApp.closeModal("newProject");
  }

  render() {
      return (
          <Modal {...this.props} show={this.props.modals.newProject} onHide={::this.closeModal}>
           <Modal.Header closeButton>
             <Modal.Title>Новый проект</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <form ref="addProjectForm" className="form-horizontal">
               <div className="form-group">
                 <label className="col-md-2 control-label">Название</label>
                 <div className="col-md-10">
                   <input ref="name" type="text" className="form-control"  />
                 </div>
               </div>

               <div className="form-group">
                 <label className="col-md-2 control-label">Описание</label>
                 <div className="col-md-10">
                   <textarea ref="description" className="form-control" rows="2"></textarea>
                 </div>
               </div>

               <div className="form-group">
                 <label className="col-md-2 control-label">Бюджет</label>
                 <div className="col-md-10">
                   <input ref="budget" type="text" className="form-control" placeholder="" />
                 </div>
               </div>
               <div className="form-group">
                 <label className="col-md-2 control-label">Сроки </label>
                 <div className="col-md-10">
                   <input ref="range" type="text" className="form-control" placeholder="" />
                 </div>
               </div>

               <div className="form-group">
                 <label className="col-md-2 control-label">Заказчик</label>
                 <div className="col-md-10">
                   <input ref="customer" type="text" className="form-control" />
                 </div>
               </div>

               <div className="form-group">
                 <label className="col-md-2 control-label">Телефон</label>
                 <div className="col-md-10">
                   <input ref="phone" type="text" className="form-control" />
                 </div>
               </div>


               <div className="form-group">
                 <label className="col-md-2 control-label" htmlFor="example-email">Email</label>
                 <div className="col-md-10">
                   <input ref="email" type="email" id="example-email" name="example-email" className="form-control" placeholder="" />
                 </div>
               </div>

               <div className="form-group">
                 <label className="col-md-2 control-label">Город</label>
                 <div className="col-md-10">
                   <input ref="city" type="text" className="form-control"  />
                 </div>
               </div>



             </form>
           </Modal.Body>
           <Modal.Footer>
             <Button onClick={::this.addProject}>Добавить</Button>
             <Button onClick={::this.closeModal}>Отмена</Button>

           </Modal.Footer>
         </Modal>

      );
  }
}
