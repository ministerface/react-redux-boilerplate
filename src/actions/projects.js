import {
  ADD_PROJECT,
  REMOVE_PROJECT
} from '../constants/projects';


export const addProject = (name, description, budget, range, customer, phone, email, city  ) => ({
    type: ADD_PROJECT,
    name,
    description,
    budget,
    range,
    customer,
    phone,
    email,
    city
});

export const removeProject = (index) => ({
  type: REMOVE_PROJECT,
  index
});
