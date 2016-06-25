import { List, Map } from 'immutable';


function app(state = {}, action) {

  switch (action.type) {
      case "ADD_PROJECT":

      const projects = [
        ...state.lists.projects,
        action.name
      ];

      return {
        ...state,
          lists: {
            projects: projects
          }
      }



    case "OPEN_MODAL":

    return Object.assign({}, state, {
          modals: {
            [action.modal]:true
          }
        });

    case "CLOSE_MODAL":

        return Object.assign({}, state, {
              modals: {
                [action.modal]:false
              }
            });

    default:
      return state;
  }

}

export default app;
