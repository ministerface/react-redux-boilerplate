import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store/index';

import App from './containers/App';
import Project from './components/project/Project';
import Todos from './containers/Todos';
import DashBoard from './containers/DashBoard';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route name="Главная" path="/" component={App}>
        <IndexRoute  component={DashBoard} />
        <Route name="Задачи" path="todos" component={Todos} />
        <Route name="Проекты" path="project" component={Project} />
      </Route>
    </Router>
  </Provider>
);


render(router, document.getElementById('root'));
