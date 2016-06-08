import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return(
      <footer className="footer text-right">
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              2016 © Ubold.
            </div>
            <div className="col-xs-6">
              <ul className="pull-right list-inline m-b-0">
                <li>
                  <a href="crm-opportunities.html#">About</a>
                </li>
                <li>
                  <a href="crm-opportunities.html#">Help</a>
                </li>
                <li>
                  <a href="crm-opportunities.html#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
