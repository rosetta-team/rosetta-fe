export const sourceLanguage = (state = {}, action) => {
  switch(action.type) {
    case 'SET_SOURCE':
      return {...state, name:action.sourceLanguage}
    case 'SET_SOURCE_ID':
      return {...state, id:action.sourceId}
    default:
      return state;
  }
}