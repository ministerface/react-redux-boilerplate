import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CREATE_FANTOM_TODO } from '../constants/todos';


export const createFantomTodo = (id, name, text, project) => ({
  type: CREATE_FANTOM_TODO,
  id,
  name,
  text,
  project
});


export function addTodo (id, name, text, project) {
  return (dispatch) => {

      dispatch({
        type: CREATE_FANTOM_TODO
      })

      setTimeout(() => {
        dispatch({
          type: TOGGLE_TODO

        })
      },2000)
    }
};

export const toggleTodo = (index) => ({
   type: TOGGLE_TODO,
   index
});

export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  index
});
