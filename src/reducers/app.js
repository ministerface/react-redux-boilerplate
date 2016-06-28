export default function app(state = {}, action) {

  switch (action.type) {
    case 'OPEN_MODAL':
    return {
          ...state,
          modals: {
            [action.modal]:true
          }
        };

    case 'CLOSE_MODAL':

        return Object.assign({}, state, {
              modals: {
                [action.modal]:false
              }
            });

    default:
      return state;
  }
}
