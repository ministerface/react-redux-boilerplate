import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './todos';
import dashboard from './dashboard';
import projects from './projects';

const rootReducer = combineReducers({
  todos,
  projects,
  dashboard,
  routing: routerReducer
});

export default rootReducer;
