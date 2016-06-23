import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers/index';
import { loadState, saveState } from './localStorage';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { redirect } from '../middlewares/redirect';

import todos from '../data/todos';
import projects from '../data/projects';

import { fromJS } from 'immutable';



const currentState = {
  todos,
  projects,
  dashboard: {},
  app: {
    modals: {
      newProject: false
    },
  }
};


const logger = createLogger();

//const defaultState = loadState(currentState);
/*
const store = createStore(
   rootReducer,
   currentState,
   applyMiddleware(logger)
 );
*/

 const store = compose(
     applyMiddleware(thunkMiddleware),
     applyMiddleware(redirect),
     applyMiddleware(logger),
   )(createStore)(rootReducer, currentState);

/*
store.subscribe(() => {
  saveState(store.getState());
});
*/

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
