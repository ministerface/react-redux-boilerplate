import React, { Component } from 'react';

export default class TopBar extends Component {
  render() {
    return (
      <div className="topbar-main">
        <div className="container">

          <div className="logo">
            <a href="" className="logo"><span>M<i className="md md-album"></i>RE TIME</span></a>
          </div>

          <div className="menu-extras">

            <ul className="nav navbar-nav navbar-right pull-right">
              <li>
                <form role="search" className="navbar-left app-search pull-left hidden-xs">
                  <input type="text" placeholder="Поиск..." className="form-control" />
                  <a href="crm-opportunities.html"><i className="fa fa-search"></i></a>
                </form>
              </li>
              <li className="dropdown hidden-xs">
                <a href="crm-opportunities.html#" data-target="#" className="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="true">
                  <i className="icon-bell"></i> <span className="badge badge-xs badge-danger">3</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-lg">
                  <li className="notifi-title"><span className="label label-default pull-right">New 3</span>Notification</li>
                  <li className="list-group nicescroll notification-list">

                    <a href="javascript:void(0);" className="list-group-item">
                      <div className="media">
                        <div className="pull-left p-r-10">
                          <em className="fa fa-diamond fa-2x text-primary"></em>
                        </div>
                        <div className="media-body">
                          <h5 className="media-heading">A new order has been placed A new order has been placed</h5>
                          <p className="m-0">
                            <small>There are new settings available</small>
                          </p>
                        </div>
                      </div>
                    </a>


                    <a href="javascript:void(0);" className="list-group-item">
                      <div className="media">
                        <div className="pull-left p-r-10">
                          <em className="fa fa-cog fa-2x text-custom"></em>
                        </div>
                        <div className="media-body">
                          <h5 className="media-heading">New settings</h5>
                          <p className="m-0">
                            <small>There are new settings available</small>
                          </p>
                        </div>
                      </div>
                    </a>


                    <a href="javascript:void(0);" className="list-group-item">
                      <div className="media">
                        <div className="pull-left p-r-10">
                          <em className="fa fa-bell-o fa-2x text-danger"></em>
                        </div>
                        <div className="media-body">
                          <h5 className="media-heading">Updates</h5>
                          <p className="m-0">
                            <small>There are <span className="text-primary font-600">2</span> new updates available</small>
                          </p>
                        </div>
                      </div>
                    </a>


                    <a href="javascript:void(0);" className="list-group-item">
                      <div className="media">
                        <div className="pull-left p-r-10">
                          <em className="fa fa-user-plus fa-2x text-info"></em>
                        </div>
                        <div className="media-body">
                          <h5 className="media-heading">New user registered</h5>
                          <p className="m-0">
                            <small>You have 10 unread messages</small>
                          </p>
                        </div>
                      </div>
                    </a>


                    <a href="javascript:void(0);" className="list-group-item">
                      <div className="media">
                        <div className="pull-left p-r-10">
                          <em className="fa fa-diamond fa-2x text-primary"></em>
                        </div>
                        <div className="media-body">
                          <h5 className="media-heading">A new order has been placed A new order has been placed</h5>
                          <p className="m-0">
                            <small>There are new settings available</small>
                          </p>
                        </div>
                      </div>
                    </a>


                    <a href="javascript:void(0);" className="list-group-item">
                      <div className="media">
                        <div className="pull-left p-r-10">
                          <em className="fa fa-cog fa-2x text-custom"></em>
                        </div>
                        <div className="media-body">
                          <h5 className="media-heading">New settings</h5>
                          <p className="m-0">
                            <small>There are new settings available</small>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="list-group-item text-right">
                      <small className="font-600">See all notifications</small>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <a href="crm-opportunities.html" className="dropdown-toggle waves-effect waves-light profile" data-toggle="dropdown" aria-expanded="true">
                  <img src="images/users/avatar-1.jpg" alt="user-img" className="img-circle" /> </a>
                <ul className="dropdown-menu">
                  <li><a href="javascript:void(0)"><i className="ti-user m-r-5"></i> Profile</a></li>
                  <li><a href="javascript:void(0)"><i className="ti-settings m-r-5"></i> Settings</a></li>
                  <li><a href="javascript:void(0)"><i className="ti-lock m-r-5"></i> Lock screen</a></li>
                  <li><a href="javascript:void(0)"><i className="ti-power-off m-r-5"></i> Logout</a></li>
                </ul>
              </li>
            </ul>

            <div className="menu-item">

              <a className="navbar-toggle">
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>

    );
  }
}
