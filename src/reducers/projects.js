import { ADD_PROJECT, REMOVE_PROJECT } from '../constants/projects';

import { v4 } from 'node-uuid';


function projects(state = [], action) {

  switch (action.type) {

    case ADD_PROJECT:

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

    case REMOVE_PROJECT:

        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1)
        ]

    default:
      return state;
  }

}

export default projects;
