import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';
import TodosGrid from './TodosGrid';

export default class MainTodos extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <div className="btn-group pull-right m-t-15">
              <button type="button" className="btn btn-default dropdown-toggle waves-effect waves-light">Настройки <span className="m-l-5"><i className="fa fa-cog"></i></span></button>
              <ul className="dropdown-menu" role="menu">
                <li><a href="crm-opportunities.html#">Action</a></li>
                <li><a href="crm-opportunities.html#">Another action</a></li>
                <li><a href="crm-opportunities.html#">Something else here</a></li>
                <li className="divider"></li>
                <li><a href="crm-opportunities.html#">Separated link</a></li>
              </ul>
            </div>
            <h4 className="page-title">Задачи</h4>

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
                <input type="text" id="search" className="form-control" placeholder="Поиск задачи..." />
                <button type="submit" className="btn btn-white"><i className="fa fa-search"></i></button>
              </div>
            </form>

          </div>
          <div className="col-md-6">
            <a href="crm-opportunities.html#custom-modal" className="btn btn-default btn-md waves-effect waves-light m-b-30 pull-right">
              <i className="md md-add"></i> Новая задача
            </a>
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
          <TodosGrid todos={this.props.todos} {...this.props}/>
          <div className="col-lg-4">
            <div className="card-box">
              <h4 className="font-bold m-t-0 m-b-20 text-dark">Активность</h4>

            </div>
          </div>

        </div>

        
      </div>
    );
  }

}
