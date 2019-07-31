export const animalsReducer = (state=[], action) => {
  switch(action.type) {
    case 'SHOW_ANIMALS':
      return action.animals;
    default:
      return state;
  }
}