export const sourceMethod = (state = {}, action) => {
  switch (action.type) {
    case 'SET_METHOD':
      return {...state, ...action.sourceMethod}
    case 'RESET_SOURCE_METHOD':
      return {}
    default:
      return state;
  }
}
