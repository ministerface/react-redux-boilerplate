import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './todos';
import dashboard from './dashboard';

const rootReducer = combineReducers({
  todos,
  dashboard,
  routing: routerReducer
});

export default rootReducer;
