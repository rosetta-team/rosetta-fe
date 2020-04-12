export const sourceLanguage = (state = '', action) => {
  switch(action.type) {
    case 'SET_SOURCE':
      return action.sourceLanguage
    default:
      return state;
  }
}