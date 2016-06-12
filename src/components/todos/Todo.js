import React, { Component } from 'react';

export default class Todo extends Component {



  render() {
    const { id, name, text, project, created, updated, status } = this.props.todo;
    const index = this.props.index;
    return (
      <div className="card-box m-b-10">
        <div className="table-box opport-box">
          <div className="table-detail checkbx-detail">
            <div className="checkbox checkbox-primary m-r-15">
              <input id="checkbox1" type="checkbox" />
              <label htmlFor="checkbox1"></label>
            </div>
          </div>

          <div className="table-detail">
            <div className="member-info">
              <h4 className="m-t-0"><b>{name}</b></h4>
              <p className="text-dark m-b-5"><b>Проект: </b> <span className="text-muted">{project}</span></p>
              <p className="text-dark m-b-5"><b>Создано: </b> <span className="text-muted">{created}</span></p>
              <p className="text-dark m-b-0"><b>Изменено: </b> <span className="text-muted">{updated}</span></p>
            </div>
          </div>

          <div className="table-detail" style={{width: 400}}>
            <p className="text-dark m-b-5">{text}</p>
          </div>

          <div className="table-detail lable-detail">
            <span className="label label-info">{status}</span>
          </div>

          <div className="table-detail table-actions-bar">
            <a href="crm-opportunities.html#" className="table-action-btn"><i className="md md-edit"></i></a>
            <a onClick={this.props.actionTodos.removeTodo.bind(null, index)}  className="table-action-btn"><i className="md md-close"></i></a>
          </div>
        </div>
      </div>
    );
  }
}
