export const results = (state = [], action) => {
  switch(action.type) {
    case 'SET_RESULTS':
      return [...state, action.results]
    default:
      return state
  }
}