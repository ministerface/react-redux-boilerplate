import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../constants/todos';
import { ROUTING } from '../constants/Routing';

export const addTodo = (name, text, project) => ({
    type: ADD_TODO,
    name,
    text,
    project
});

export const redirect = () => ({
  type: ROUTING,
  method: 'push',
  nextUrl: '/todos'
});

export const toggleTodo = (index) => ({
   type: TOGGLE_TODO,
   index
});

export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  index
});

export function getPhotos(year) {

  return (dispatch) => {
    dispatch({
      type: 'GET_PHOTOS_REQUEST',
      payload: year
    });

    setTimeout(() => {
      dispatch({
        type: 'GET_PHOTOS_SUCCESS',
        payload: [1,2,3,4,5]
      })
    }, 1000)
  }
}
