import {
  ADD_PROJECT,
  REMOVE_PROJECT
} from '../constants/projects';


export const addProject = (name, customer, range, budget) => ({
    type: ADD_PROJECT,
    name,
    customer,
    range,
    budget,
    status
});

export const removeProject = (index) => ({
  type: REMOVE_PROJECT,
  index
});
