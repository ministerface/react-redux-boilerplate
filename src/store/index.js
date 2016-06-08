import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers/index';
import { loadState, saveState } from './localStorage';

import todos from '../data/todos';

const currentState = {
  todos,
  dashboard: {}
};


//const defaultState = loadState(currentState);
const store = createStore(rootReducer, currentState);

store.subscribe(() => {
  saveState(store.getState());
});

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
