export const sourceMethod = (state = {}, action) => {
  switch (action.type) {
    case 'SET_METHOD':
      return {...state, name:action.sourceMethod, id:action.methodId}
    default:
      return state;
  }
}