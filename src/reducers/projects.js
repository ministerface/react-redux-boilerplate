import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CREATE_FANTOM_TODO } from '../constants/todos';

import { v4 } from 'node-uuid';


function projects(state = [], action) {

  switch (action.type) {

    case ADD_TODO:

    return [
      {
        id: v4(),
        name: action.name,
        project: action.project,
        text: action.text,
        status: "Новая",
        created: Date.now(),
        updated: Date.now()
      },
      ...state
    ]


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


        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1)
        ]



    default:
      return state;
  }

}

export default projects;
