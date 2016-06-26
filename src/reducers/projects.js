import { ADD_PROJECT, REMOVE_PROJECT } from '../constants/projects';
import { v4 } from 'node-uuid';
import { List, Map } from 'immutable';
import crio from 'crio';

function projects(state = [], action) {

  switch (action.type) {

    case ADD_PROJECT:

    return [
      {
      id: v4(),
      name: action.name,
      description: action.description,
      budget: action.budget,
      range: action.range,
      customer: action.customer,
      phone: action.phone,
      email: action.email,
      city: action.city,
      status: "Новай проект",
      created: Date.now(),
      updated: Date.now()
    }, 
      ...state
    ];

    /*
      const stateCurrent = List(state);
      const stateNext = stateCurrent.unshift({
        id: v4(),
        name: action.name,
        description: action.description,
        budget: action.budget,
        range: action.range,
        customer: action.customer,
        phone: action.phone,
        email: action.email,
        city: action.city,
        status: "Новай проект",
        created: Date.now(),
        updated: Date.now()
      });


    return stateNext;
    */

    //return nextState;

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
