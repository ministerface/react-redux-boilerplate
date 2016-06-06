import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar-custom">
        <div className="container">
          <div id="navigation">
            <ul className="navigation-menu">
              <li className="has-submenu">
                <Link to="/" activeClassName="active"><i className="md md-dashboard"></i>Главная</Link>
              </li>
              <li className="has-submenu">
                <Link to="/todos" activeClassName="active"><i className="md md-color-lens"></i>Задачи</Link>

              </li>


              <li className="has-submenu">
                <Link to="/project" activeClassName="active"><i className="md md-layers"></i>Проекты</Link>
              </li>
              <li className="has-submenu">
                <a href="crm-opportunities.html#"><i className="md md-class"></i>Финансы</a>
              </li>

              <li className="has-submenu">
                <a href="crm-opportunities.html#"><i className="md md-pages"></i>Заказчики</a>
              </li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}
