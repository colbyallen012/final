export const animalsReducer = (state=[], action) => {
  switch(action.type) {
    case 'SHOW_ANIMALS':
      return action.animals;
    default:
      return state;
  }
}

export const isLoading = (state=false, action) => {
  switch(action.type) {
    case 'IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export const hasErrored = (state='', action) => {
  switch(action.type) {
    case 'HAS_ERRORED':
      return action.errorMessage;
    default:
      return state;
  }
}