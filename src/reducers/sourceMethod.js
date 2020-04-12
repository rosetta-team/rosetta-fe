export const sourceMethod = (state = '', action) => {
  switch (action.type) {
    case 'SET_SOURCE':
      return action.sourceMethod
    default:
      return state;
  }
}