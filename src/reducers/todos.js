import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../constants/todos';

function todos(state = [], action) {

  switch (action.type) {
    case ADD_TODO:

    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            finish: !todo.finish
          })
        }
        return todo
      })


    case REMOVE_TODO:

    default:
      return state;
  }

}

export default todos;
