export const targetLanguage = (state = '', action) => {
  switch (action.type) {
    case 'SET_TARGET':
      return action.targetLanguage
    default:
      return state;
  }
}