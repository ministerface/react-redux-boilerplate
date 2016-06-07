import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';

export default class MainTodos extends Component {

  render() {
    return (
      <div>



        <div className="row">
          <div className="col-sm-12">
            <div className="btn-group pull-right m-t-15">
              <button type="button" className="btn btn-default dropdown-toggle waves-effect waves-light">Settings <span className="m-l-5"><i className="fa fa-cog"></i></span></button>
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
                <input type="text" id="search" className="form-control" placeholder="Search..." />
                <button type="submit" className="btn btn-white"><i className="fa fa-search"></i></button>
              </div>
            </form>

          </div>
          <div className="col-md-6">
            <a href="crm-opportunities.html#custom-modal" className="btn btn-default btn-md waves-effect waves-light m-b-30 pull-right"><i className="md md-add"></i> Add New</a>
            <div className="h5 m-0">
              <span className="vertical-middle">Sort By:</span>
              <div className="btn-group vertical-middle">
                <label className="btn btn-white btn-md waves-effect active">
                  <input type="checkbox" /> Status
                </label>
                <label className="btn btn-white btn-md waves-effect">
                  <input type="checkbox"  /> Type
                </label>
                <label className="btn btn-white btn-md waves-effect">
                  <input type="checkbox" /> Name
                </label>
              </div>
            </div>

          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">

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
                    <h4 className="m-t-0"><b>Enveto Market Pty Ltd. </b></h4>
                    <p className="text-dark m-b-5"><b>Category: </b> <span className="text-muted">Branch manager</span></p>
                    <p className="text-dark m-b-0"><b>Active: </b> <span className="text-muted">2 hours ago</span></p>
                  </div>
                </div>

                <div className="table-detail">
                  <p className="text-dark m-b-5"><b>Email:</b> <span className="text-muted">coderthemes@gmail.com</span></p>
                  <p className="text-dark m-b-0"><b>Contact:</b> <span className="text-muted">+12 34567890</span></p>
                </div>

                <div className="table-detail lable-detail">
                  <span className="label label-info">Hot</span>
                </div>

                <div className="table-detail table-actions-bar">
                  <a href="crm-opportunities.html#" className="table-action-btn"><i className="md md-edit"></i></a>
                  <a href="crm-opportunities.html#" className="table-action-btn"><i className="md md-close"></i></a>
                </div>
              </div>
            </div>


            <div className="card-box m-b-10">
              <div className="table-box opport-box">
                <div className="table-detail checkbx-detail">
                  <div className="checkbox checkbox-primary m-r-15">
                    <input id="checkbox2" type="checkbox" />
                    <label htmlFor="checkbox2"></label>
                  </div>
                </div>

                <div className="table-detail">
                  <div className="member-info">
                    <h4 className="m-t-0"><b>The Coca-Cola Company </b></h4>
                    <p className="text-dark m-b-5"><b>Category: </b> <span className="text-muted">Branch manager</span></p>
                    <p className="text-dark m-b-0"><b>Active: </b> <span className="text-muted">2 hours ago</span></p>
                  </div>
                </div>

                <div className="table-detail">
                  <p className="text-dark m-b-5"><b>Email:</b> <span className="text-muted">coderthemes@gmail.com</span></p>
                  <p className="text-dark m-b-0"><b>Contact:</b> <span className="text-muted">+12 34567890</span></p>
                </div>

                <div className="table-detail lable-detail">
                  <span className="label label-purple">Cold</span>
                </div>

                <div className="table-detail table-actions-bar">
                  <a href="crm-opportunities.html#" className="table-action-btn"><i className="md md-edit"></i></a>
                  <a href="crm-opportunities.html#" className="table-action-btn"><i className="md md-close"></i></a>
                </div>
              </div>
            </div>



            <div className="card-box m-b-10">
              <div className="table-box opport-box">
                <div className="table-detail checkbx-detail">
                  <div className="checkbox checkbox-primary m-r-15">
                    <input id="checkbox3" type="checkbox" />
                    <label htmlFor="checkbox3"></label>
                  </div>
                </div>

                <div className="table-detail">
                  <div className="member-info">
                    <h4 className="m-t-0"><b>Dribbble LLC </b></h4>
                    <p className="text-dark m-b-5"><b>Category: </b> <span className="text-muted">Branch manager</span></p>
                    <p className="text-dark m-b-0"><b>Active: </b> <span className="text-muted">2 hours ago</span></p>
                  </div>
                </div>

                <div className="table-detail">
                  <p className="text-dark m-b-5"><b>Email:</b> <span className="text-muted">coderthemes@gmail.com</span></p>
                  <p className="text-dark m-b-0"><b>Contact:</b> <span className="text-muted">+12 34567890</span></p>
                </div>

                <div className="table-detail lable-detail">
                  <span className="label label-warning">In-progress</span>
                </div>

                <div className="table-detail table-actions-bar">
                  <a href="crm-opportunities.html#" className="table-action-btn"><i className="md md-edit"></i></a>
                  <a href="crm-opportunities.html#" className="table-action-btn"><i className="md md-close"></i></a>
                </div>
              </div>
            </div>



            <div className="card-box m-b-10">
              <div className="table-box opport-box">
                <div className="table-detail checkbx-detail">
                  <div className="checkbox checkbox-primary m-r-15">
                    <input id="checkbox4" type="checkbox" />
                    <label htmlFor="checkbox4"></label>
                  </div>
                </div>

                <div className="table-detail">
                  <div className="member-info">
                    <h4 className="m-t-0"><b>Coderthemes design </b></h4>
                    <p className="text-dark m-b-5"><b>Category: </b> <span className="text-muted">Branch manager</span></p>
                    <p className="text-dark m-b-0"><b>Active: </b> <span className="text-muted">2 hours ago</span></p>
                  </div>
                </div>

                <div className="table-detail">
                  <p className="text-dark m-b-5"><b>Email:</b> <span className="text-muted">coderthemes@gmail.com</span></p>
                  <p className="text-dark m-b-0"><b>Contact:</b> <span className="text-muted">+12 34567890</span></p>
                </div>

                <div className="table-detail lable-detail">
                  <span className="label label-danger">Lost</span>
                </div>

                <div className="table-detail table-actions-bar">
                  <a href="crm-opportunities.html#" className="table-action-btn"><i className="md md-edit"></i></a>
                  <a href="crm-opportunities.html#" className="table-action-btn"><i className="md md-close"></i></a>
                </div>
              </div>
            </div>



            <div className="card-box">
              <div className="table-box opport-box">
                <div className="table-detail checkbx-detail">
                  <div className="checkbox checkbox-primary m-r-15">
                    <input id="checkbox5" type="checkbox" />
                    <label htmlFor="checkbox5"></label>
                  </div>
                </div>

                <div className="table-detail">
                  <div className="member-info">
                    <h4 className="m-t-0"><b>WrapMarket LLC </b></h4>
                    <p className="text-dark m-b-5"><b>Category: </b> <span className="text-muted">Branch manager</span></p>
                    <p className="text-dark m-b-0"><b>Active: </b> <span className="text-muted">2 hours ago</span></p>
                  </div>
                </div>

                <div className="table-detail">
                  <p className="text-dark m-b-5"><b>Email:</b> <span className="text-muted">coderthemes@gmail.com</span></p>
                  <p className="text-dark m-b-0"><b>Contact:</b> <span className="text-muted">+12 34567890</span></p>
                </div>

                <div className="table-detail lable-detail">
                  <span className="label label-success">Won</span>
                </div>

                <div className="table-detail table-actions-bar">
                  <a href="crm-opportunities.html#" className="table-action-btn"><i className="md md-edit"></i></a>
                  <a href="crm-opportunities.html#" className="table-action-btn"><i className="md md-close"></i></a>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-4">
            <div className="card-box">
              <h4 className="font-bold m-t-0 m-b-20 text-dark">Status Chart</h4>
              <div id="pie-chart"></div>
            </div>
          </div>

        </div>

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
      </div>
    );
  }

}
