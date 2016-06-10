import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';
export default class Project extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <div className="btn-group pull-right m-t-15">
              <button type="button" className="btn btn-default dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false">Settings <span className="m-l-5"><i className="fa fa-cog"></i></span></button>
              <ul className="dropdown-menu" role="menu">
                <li><a href="extra-profile.html#">Action</a></li>
                <li><a href="extra-profile.html#">Another action</a></li>
                <li><a href="extra-profile.html#">Something else here</a></li>
                <li className="divider"></li>
                <li><a href="extra-profile.html#">Separated link</a></li>
              </ul>
            </div>
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

          <div className="col-sm-5 col-md-4 col-lg-3">
            <div className="profile-detail card-box">
              <div>
                <img src="../../images/users/avatar-2.jpg" className="img-circle" alt="profile-image" />

                <ul className="list-inline status-list m-t-20">
                  <li>
                    <h3 className="text-primary m-b-5">60</h3>
                    <p className="text-muted">Срок</p>
                  </li>

                  <li>
                    <h3 className="text-success m-b-5">50 000</h3>
                    <p className="text-muted">Бюджет</p>
                  </li>
                </ul>

                <button type="button" className="btn btn-pink btn-custom waves-effect waves-light">Посмотреть</button>

                <hr />
                <h4 className="text-uppercase font-600">Secure Transaction</h4>
                <p className="text-muted font-13 m-b-30">
                  Разработка сервиса для безопасных сделок в интернете
                </p>

                <div className="text-left">
                  <p className="text-muted font-13"><strong>Заказчик :</strong> <span className="m-l-15">Роман</span></p>

                  <p className="text-muted font-13"><strong>Телефон :</strong><span className="m-l-15">8 (123) 123-12-34</span></p>

                  <p className="text-muted font-13"><strong>E-mail :</strong> <span className="m-l-15">test@gmail.com</span></p>

                  <p className="text-muted font-13"><strong>Город :</strong> <span className="m-l-15">Новочеркасск</span></p>

                </div>

              </div>

            </div>

          </div>

          <div className="col-sm-5 col-md-4 col-lg-3">
            <div className="profile-detail card-box">
              <div>
                <img src="../../images/users/avatar-2.jpg" className="img-circle" alt="profile-image" />

                <ul className="list-inline status-list m-t-20">
                  <li>
                    <h3 className="text-primary m-b-5">60</h3>
                    <p className="text-muted">Срок</p>
                  </li>

                  <li>
                    <h3 className="text-success m-b-5">50 000</h3>
                    <p className="text-muted">Бюджет</p>
                  </li>
                </ul>

                <button type="button" className="btn btn-pink btn-custom waves-effect waves-light">Посмотреть</button>

                <hr />
                <h4 className="text-uppercase font-600">Secure Transaction</h4>
                <p className="text-muted font-13 m-b-30">
                  Разработка сервиса для безопасных сделок в интернете
                </p>

                <div className="text-left">
                  <p className="text-muted font-13"><strong>Заказчик :</strong> <span className="m-l-15">Роман</span></p>

                  <p className="text-muted font-13"><strong>Телефон :</strong><span className="m-l-15">8 (123) 123-12-34</span></p>

                  <p className="text-muted font-13"><strong>E-mail :</strong> <span className="m-l-15">test@gmail.com</span></p>

                  <p className="text-muted font-13"><strong>Город :</strong> <span className="m-l-15">Новочеркасск</span></p>

                </div>

              </div>

            </div>

          </div>

          <div className="col-sm-5 col-md-4 col-lg-3">
            <div className="profile-detail card-box">
              <div>
                <img src="../../images/users/avatar-2.jpg" className="img-circle" alt="profile-image" />

                <ul className="list-inline status-list m-t-20">
                  <li>
                    <h3 className="text-primary m-b-5">60</h3>
                    <p className="text-muted">Срок</p>
                  </li>

                  <li>
                    <h3 className="text-success m-b-5">50 000</h3>
                    <p className="text-muted">Бюджет</p>
                  </li>
                </ul>

                <button type="button" className="btn btn-pink btn-custom waves-effect waves-light">Посмотреть</button>

                <hr />
                <h4 className="text-uppercase font-600">Secure Transaction</h4>
                <p className="text-muted font-13 m-b-30">
                  Разработка сервиса для безопасных сделок в интернете
                </p>

                <div className="text-left">
                  <p className="text-muted font-13"><strong>Заказчик :</strong> <span className="m-l-15">Роман</span></p>

                  <p className="text-muted font-13"><strong>Телефон :</strong><span className="m-l-15">8 (123) 123-12-34</span></p>

                  <p className="text-muted font-13"><strong>E-mail :</strong> <span className="m-l-15">test@gmail.com</span></p>

                  <p className="text-muted font-13"><strong>Город :</strong> <span className="m-l-15">Новочеркасск</span></p>

                </div>

              </div>

            </div>

          </div>

          <div className="col-sm-5 col-md-4 col-lg-3">
            <div className="profile-detail card-box">
              <div>
                <img src="../../images/users/avatar-2.jpg" className="img-circle" alt="profile-image" />

                <ul className="list-inline status-list m-t-20">
                  <li>
                    <h3 className="text-primary m-b-5">60</h3>
                    <p className="text-muted">Срок</p>
                  </li>

                  <li>
                    <h3 className="text-success m-b-5">50 000</h3>
                    <p className="text-muted">Бюджет</p>
                  </li>
                </ul>

                <button type="button" className="btn btn-pink btn-custom waves-effect waves-light">Посмотреть</button>

                <hr />
                <h4 className="text-uppercase font-600">Secure Transaction</h4>
                <p className="text-muted font-13 m-b-30">
                  Разработка сервиса для безопасных сделок в интернете
                </p>

                <div className="text-left">
                  <p className="text-muted font-13"><strong>Заказчик :</strong> <span className="m-l-15">Роман</span></p>

                  <p className="text-muted font-13"><strong>Телефон :</strong><span className="m-l-15">8 (123) 123-12-34</span></p>

                  <p className="text-muted font-13"><strong>E-mail :</strong> <span className="m-l-15">test@gmail.com</span></p>

                  <p className="text-muted font-13"><strong>Город :</strong> <span className="m-l-15">Новочеркасск</span></p>

                </div>

              </div>

            </div>

          </div>


        </div>

      </div>
    );
  }

}
