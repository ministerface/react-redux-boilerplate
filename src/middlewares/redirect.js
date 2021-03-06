import { browserHistory } from 'react-router';
import { ROUTING } from '../constants/Routing';


export const redirect = store => next => action => {
  if (action.type === ROUTING) {
    browserHistory[action.method](action.nextUrl)
  }
  return next(action)
}
