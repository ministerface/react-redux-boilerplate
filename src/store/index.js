import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers/index';
import { loadState, saveState } from './localStorage';
import createLogger from 'redux-logger';

import todos from '../data/todos';

const currentState = {
  todos,
  dashboard: {}
};

const logger = createLogger();

//const defaultState = loadState(currentState);
const store = createStore(
   rootReducer,
   currentState,
   applyMiddleware(logger)
 );

store.subscribe(() => {
  saveState(store.getState());
});

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
