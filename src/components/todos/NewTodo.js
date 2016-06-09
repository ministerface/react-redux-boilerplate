import React, { Component } from 'react';
import { Link } from 'react-router';
import Select from '../ui/Select';

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

            <form>
              <div className="form-group">
                <label htmlFor="userName">Название</label>
                <input type="text" required="" placeholder="Моя новая задача" className="form-control" id="userName" />
              </div>

              <div className="form-group">
                <label htmlFor="emailAddress">Проект</label>
                <Select />
              </div>

              <div className="form-group">
                <label htmlFor="pass1">Описание</label>
                <textarea className="form-control" rows="3"></textarea>
              </div>


              <div className="form-group text-right m-b-0">
                <button className="btn btn-primary waves-effect waves-light" type="submit">
                                        Создать
                                    </button>
                                    <Link to="/todos" className="btn btn-default waves-effect waves-light m-l-5">
                                        Отмена
                                    </Link>
                                </div>

                            </form>
                        </div>
                        </div>
                      </div>
    );
  }
}
