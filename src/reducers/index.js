import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './todos';
import dashboard from './dashboard';
import projects from './projects';
import app from './app';

const rootReducer = combineReducers({
  app,
  todos,
  projects,
  dashboard,
  routing: routerReducer
});

export default rootReducer;
