import React, { Component } from 'react';
import { Link } from 'react-router';
import Breadcrumbs from 'react-breadcrumbs';
import ProjectsGrid from './ProjectsGrid';
import AddProject from './AddProject';



export default class MainProjects extends Component {
  constructor(props){
    super(props);
  }

  openModal(e) {
    e.preventDefault();
    this.props.actionApp.openModal("newProject");
  }

  render() {
    return (
      <div>

        <AddProject {...this.props}/>

        <div className="row">
          <div className="col-sm-12">

            <h4 className="page-title">Проекты</h4>

            <Breadcrumbs
              separator=""
              wrapperClass="breadcrumb"
              wrapperElement="ol"
              itemElement="li"
              routes={this.props.routes}
              params={this.props.params}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">

            <form role="form">
              <div className="form-group contact-search m-b-30">
                <input type="text" id="search" className="form-control" placeholder="Поиск проекта..." />
                <button type="submit" className="btn btn-white"><i className="fa fa-search"></i></button>
              </div>
            </form>

          </div>

          <div className="col-md-6">
            <a onClick={::this.openModal} className="btn btn-default btn-md waves-effect waves-light m-b-30 pull-right"> <i className="md md-add"></i> Новый проект </a>
            <div className="h5 m-0">
              <span className="vertical-middle">Сортировать:&nbsp;&nbsp; </span>
              <div className="btn-group vertical-middle">
                <label className="btn btn-white btn-md waves-effect active">
                  Статус
                </label>
                <label className="btn btn-white btn-md waves-effect">
                  Тип
                </label>
                <label className="btn btn-white btn-md waves-effect">
                  Дата
                </label>
              </div>
            </div>

          </div>
        </div>

        <div className="row">
          {<ProjectsGrid projects={this.props.projects} {...this.props}/>}
        </div>


      </div>
    );
  }

}
