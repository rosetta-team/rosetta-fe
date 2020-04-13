export const targetLanguage = (state = {}, action) => {
  switch (action.type) {
    case 'SET_TARGET':
      return {...state, name:action.targetLanguage}
    case 'SET_TARGET_ID':
      return {...state, id:action.targetId}
    default:
      return state;
  }
}