import React, { Component } from 'react';

export default class NewTodo extends Component {
  render() {
    return (
      <div className="row">
      <div className="col-lg-12">
      <div className="card-box">
      <h4 className="m-t-0 header-title"><b>Новая задача</b></h4>
                            <p className="text-muted font-13 m-b-30">
                                Форма добавления
                            </p>

                            <form action="#">
                                <div className="form-group">
                                    <label htmlFor="userName">Название</label>
                                    <input type="text" required="" placeholder="Моя новая задача" className="form-control" id="userName" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="emailAddress">Email address*</label>
                                    <input type="email" required="" placeholder="Enter email" className="form-control" id="emailAddress" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass1">Password*</label>
                                    <input id="pass1" type="password" placeholder="Password" required="" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passWord2">Confirm Password *</label>
                                    <input type="password" required="" placeholder="Password" className="form-control" id="passWord2" />
                                </div>
                                <div className="form-group">
                                    <div className="checkbox">
                                        <input id="remember-1" type="checkbox"/>
                                        <label htmlFor="remember-1"> Remember me </label>
                                    </div>
                                </div>

                                <div className="form-group text-right m-b-0">
                                    <button className="btn btn-primary waves-effect waves-light" type="submit">
                                        Submit
                                    </button>
                                    <button type="reset" className="btn btn-default waves-effect waves-light m-l-5">
                                        Cancel
                                    </button>
                                </div>

                            </form>
                        </div>
                        </div>
                      </div>
    );
  }
}
