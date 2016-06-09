import React, { Component } from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar-custom">
        <div className="container">
          <div id="navigation">
            <ul className="navigation-menu">
              <li className="has-submenu">
                <NavLink onlyActiveOnIndex={true} to="/"><i className="md md-dashboard"></i>Главная</NavLink>
              </li>
              <li className="has-submenu">
                <NavLink to="/todos"><i className="md md-color-lens"></i>Задачи</NavLink>
              </li>
              <li className="has-submenu">
                <NavLink to="/project"><i className="md md-layers"></i>Проекты</NavLink>
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
