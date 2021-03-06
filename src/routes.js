import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Projects from './containers/Projects';
import Todos from './containers/Todos';
import DashBoard from './containers/DashBoard';
import NewTodo from './components/todos/NewTodo';

export const routes = (
  <Route name="Главная" path="/" component={ App }>
    <IndexRoute  component={ DashBoard } />
    <Route name="Задачи" path="todos" component={ Todos }>
      <Route name="Новая задача" path="new" component={ NewTodo }/>
      <Route name="Новая задача" path=":todo/edit" component={ NewTodo } />
    </Route>
    <Route name="Проекты" path="projects" component={ Projects } />
  </Route>
);
