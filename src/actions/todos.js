import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  CREATE_FANTOM_TODO
 } from '../constants/todos';

 import { ROUTING } from '../constants/Routing';




export const addTodo = (id, name, text, project) => ({
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
