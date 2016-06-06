import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../constants/todos';

export const addTodo = (text) => ({
  type: ADD_TODO,
  text
});

export const toggleTodo = (index) => ({
   type: TOGGLE_TODO,
   index
});

export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  index
});
