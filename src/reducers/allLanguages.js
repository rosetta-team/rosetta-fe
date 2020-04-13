export const allLanguages = (state = [], action) => {
  switch(action.type) {
    case 'SET_LANGUAGES':
      return [...state, action.language]
    default:
      return state;
  }
}