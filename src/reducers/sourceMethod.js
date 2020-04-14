export const sourceMethod = (state = {}, action) => {
  switch (action.type) {
    case 'SET_METHOD':
      return {...state, action.sourceMethod}
    default:
      return state;
  }
}
