import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';

export default class MainBoard extends Component {
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
            <h4 className="page-title">Главная</h4>
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
      </div>
    );
  }
}
