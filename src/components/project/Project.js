import React, { Component } from 'react';
import Breadcrumbs from 'react-breadcrumbs';
export default class Project extends Component {

  render() {
  const { name, description, budget, range, customer, phone, email, city } = this.props.project;
    return (
      <div>
        <div className="col-sm-5 col-md-4 col-lg-3">
          <div className="profile-detail card-box">
            <div>

              <h4 className="text-uppercase font-600">{ name }</h4>
              <ul className="list-inline status-list m-t-20">
                <li>
                  <h3 className="text-primary m-b-5">{ range }</h3>
                  <p className="text-muted">Срок</p>
                </li>

                <li>
                  <h3 className="text-success m-b-5">{ budget }</h3>
                  <p className="text-muted">Бюджет</p>
                </li>
              </ul>

              <button type="button" className="btn btn-pink btn-custom waves-effect waves-light">Посмотреть</button>

              <hr />

              <p className="text-muted font-13 m-b-30">
                { description }
              </p>

              <div className="text-left">
                <p className="text-muted font-13"><strong>Заказчик :</strong> <span className="m-l-15">{ customer }</span></p>

                <p className="text-muted font-13"><strong>Телефон :</strong><span className="m-l-15">{ phone }</span></p>

                <p className="text-muted font-13"><strong>E-mail :</strong> <span className="m-l-15">{ email }</span></p>

                <p className="text-muted font-13"><strong>Город :</strong> <span className="m-l-15">{ city }</span></p>

              </div>

            </div>

          </div>

        </div>
      </div>
    );
  }

}
