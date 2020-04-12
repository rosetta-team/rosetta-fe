export const targetLanguage = (state = '', action) => {
  switch (action.type) {
    case 'SET_SOURCE':
      return action.targetLanguage
    default:
      return state;
  }
}