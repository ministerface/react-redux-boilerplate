import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../constants/todos';

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function removeTodo(index) {
  return { type: REMOVE_TODO, index }
}
