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
                    <h3 className="text-primary m-b-5">456</h3>
                    <p className="text-muted">Followings</p>
                  </li>

                  <li>
                    <h3 className="text-success m-b-5">5864</h3>
                    <p className="text-muted">Followers</p>
                  </li>
                </ul>

                <button type="button" className="btn btn-pink btn-custom btn-rounded waves-effect waves-light">Follow</button>

                <hr />
                <h4 className="text-uppercase font-600">About Me</h4>
                <p className="text-muted font-13 m-b-30">
                  Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                </p>

                <div className="text-left">
                  <p className="text-muted font-13"><strong>Full Name :</strong> <span className="m-l-15">Johnathan Deo</span></p>

                  <p className="text-muted font-13"><strong>Mobile :</strong><span className="m-l-15">(123) 123 1234</span></p>

                  <p className="text-muted font-13"><strong>Email :</strong> <span className="m-l-15">coderthemes@gmail.com</span></p>

                  <p className="text-muted font-13"><strong>Location :</strong> <span className="m-l-15">USA</span></p>

                </div>

                <div className="button-list m-t-20">
                  <button type="button" className="btn btn-facebook waves-effect waves-light">
                    <i className="fa fa-facebook"></i>
                  </button>

                  <button type="button" className="btn btn-twitter waves-effect waves-light">
                    <i className="fa fa-twitter"></i>
                  </button>

                  <button type="button" className="btn btn-linkedin waves-effect waves-light">
                    <i className="fa fa-linkedin"></i>
                  </button>

                  <button type="button" className="btn btn-dribbble waves-effect waves-light">
                    <i className="fa fa-dribbble"></i>
                  </button>

                </div>
              </div>

            </div>

            <div className="card-box">
              <h4 className="m-t-0 m-b-20 header-title"><b>Friends <span className="text-muted">(154)</span></b></h4>

              <div className="friend-list">
                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-1.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-2.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-3.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-4.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-5.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-6.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-7.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#" className="text-center">
                  <span className="extra-number">+89</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-5 col-md-4 col-lg-3">
            <div className="profile-detail card-box">
              <div>
                <img src="../../images/users/avatar-2.jpg" className="img-circle" alt="profile-image" />

                <ul className="list-inline status-list m-t-20">
                  <li>
                    <h3 className="text-primary m-b-5">456</h3>
                    <p className="text-muted">Followings</p>
                  </li>

                  <li>
                    <h3 className="text-success m-b-5">5864</h3>
                    <p className="text-muted">Followers</p>
                  </li>
                </ul>

                <button type="button" className="btn btn-pink btn-custom btn-rounded waves-effect waves-light">Follow</button>

                <hr />
                <h4 className="text-uppercase font-600">About Me</h4>
                <p className="text-muted font-13 m-b-30">
                  Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                </p>

                <div className="text-left">
                  <p className="text-muted font-13"><strong>Full Name :</strong> <span className="m-l-15">Johnathan Deo</span></p>

                  <p className="text-muted font-13"><strong>Mobile :</strong><span className="m-l-15">(123) 123 1234</span></p>

                  <p className="text-muted font-13"><strong>Email :</strong> <span className="m-l-15">coderthemes@gmail.com</span></p>

                  <p className="text-muted font-13"><strong>Location :</strong> <span className="m-l-15">USA</span></p>

                </div>

                <div className="button-list m-t-20">
                  <button type="button" className="btn btn-facebook waves-effect waves-light">
                    <i className="fa fa-facebook"></i>
                  </button>

                  <button type="button" className="btn btn-twitter waves-effect waves-light">
                    <i className="fa fa-twitter"></i>
                  </button>

                  <button type="button" className="btn btn-linkedin waves-effect waves-light">
                    <i className="fa fa-linkedin"></i>
                  </button>

                  <button type="button" className="btn btn-dribbble waves-effect waves-light">
                    <i className="fa fa-dribbble"></i>
                  </button>

                </div>
              </div>

            </div>

            <div className="card-box">
              <h4 className="m-t-0 m-b-20 header-title"><b>Friends <span className="text-muted">(154)</span></b></h4>

              <div className="friend-list">
                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-1.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-2.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-3.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-4.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-5.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-6.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-7.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#" className="text-center">
                  <span className="extra-number">+89</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-5 col-md-4 col-lg-3">
            <div className="profile-detail card-box">
              <div>
                <img src="../../images/users/avatar-2.jpg" className="img-circle" alt="profile-image" />

                <ul className="list-inline status-list m-t-20">
                  <li>
                    <h3 className="text-primary m-b-5">456</h3>
                    <p className="text-muted">Followings</p>
                  </li>

                  <li>
                    <h3 className="text-success m-b-5">5864</h3>
                    <p className="text-muted">Followers</p>
                  </li>
                </ul>

                <button type="button" className="btn btn-pink btn-custom btn-rounded waves-effect waves-light">Follow</button>

                <hr />
                <h4 className="text-uppercase font-600">About Me</h4>
                <p className="text-muted font-13 m-b-30">
                  Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                </p>

                <div className="text-left">
                  <p className="text-muted font-13"><strong>Full Name :</strong> <span className="m-l-15">Johnathan Deo</span></p>

                  <p className="text-muted font-13"><strong>Mobile :</strong><span className="m-l-15">(123) 123 1234</span></p>

                  <p className="text-muted font-13"><strong>Email :</strong> <span className="m-l-15">coderthemes@gmail.com</span></p>

                  <p className="text-muted font-13"><strong>Location :</strong> <span className="m-l-15">USA</span></p>

                </div>

                <div className="button-list m-t-20">
                  <button type="button" className="btn btn-facebook waves-effect waves-light">
                    <i className="fa fa-facebook"></i>
                  </button>

                  <button type="button" className="btn btn-twitter waves-effect waves-light">
                    <i className="fa fa-twitter"></i>
                  </button>

                  <button type="button" className="btn btn-linkedin waves-effect waves-light">
                    <i className="fa fa-linkedin"></i>
                  </button>

                  <button type="button" className="btn btn-dribbble waves-effect waves-light">
                    <i className="fa fa-dribbble"></i>
                  </button>

                </div>
              </div>

            </div>

            <div className="card-box">
              <h4 className="m-t-0 m-b-20 header-title"><b>Friends <span className="text-muted">(154)</span></b></h4>

              <div className="friend-list">
                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-1.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-2.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-3.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-4.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-5.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-6.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-7.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#" className="text-center">
                  <span className="extra-number">+89</span>
                </a>
              </div>
            </div>
          </div>


          <div className="col-sm-5 col-md-4 col-lg-3">
            <div className="profile-detail card-box">
              <div>
                <img src="../../images/users/avatar-2.jpg" className="img-circle" alt="profile-image" />

                <ul className="list-inline status-list m-t-20">
                  <li>
                    <h3 className="text-primary m-b-5">456</h3>
                    <p className="text-muted">Followings</p>
                  </li>

                  <li>
                    <h3 className="text-success m-b-5">5864</h3>
                    <p className="text-muted">Followers</p>
                  </li>
                </ul>

                <button type="button" className="btn btn-pink btn-custom btn-rounded waves-effect waves-light">Follow</button>

                <hr />
                <h4 className="text-uppercase font-600">About Me</h4>
                <p className="text-muted font-13 m-b-30">
                  Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                </p>

                <div className="text-left">
                  <p className="text-muted font-13"><strong>Full Name :</strong> <span className="m-l-15">Johnathan Deo</span></p>

                  <p className="text-muted font-13"><strong>Mobile :</strong><span className="m-l-15">(123) 123 1234</span></p>

                  <p className="text-muted font-13"><strong>Email :</strong> <span className="m-l-15">coderthemes@gmail.com</span></p>

                  <p className="text-muted font-13"><strong>Location :</strong> <span className="m-l-15">USA</span></p>

                </div>

                <div className="button-list m-t-20">
                  <button type="button" className="btn btn-facebook waves-effect waves-light">
                    <i className="fa fa-facebook"></i>
                  </button>

                  <button type="button" className="btn btn-twitter waves-effect waves-light">
                    <i className="fa fa-twitter"></i>
                  </button>

                  <button type="button" className="btn btn-linkedin waves-effect waves-light">
                    <i className="fa fa-linkedin"></i>
                  </button>

                  <button type="button" className="btn btn-dribbble waves-effect waves-light">
                    <i className="fa fa-dribbble"></i>
                  </button>

                </div>
              </div>

            </div>

            <div className="card-box">
              <h4 className="m-t-0 m-b-20 header-title"><b>Friends <span className="text-muted">(154)</span></b></h4>

              <div className="friend-list">
                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-1.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-2.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-3.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-4.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-5.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-6.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#">
                  <img src="../../images/users/avatar-7.jpg" className="img-circle thumb-md" alt="friend" />
                </a>

                <a href="extra-profile.html#" className="text-center">
                  <span className="extra-number">+89</span>
                </a>
              </div>
            </div>
          </div>



        </div>

      </div>
    );
  }

}
