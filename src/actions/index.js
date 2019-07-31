export const showAnimals = (animals) => ({
  type: 'SHOW_ANIMALS',
  animals
})

export const isLoading = (isLoading) => ({
  type: 'IS_LOADING',
  isLoading
});

export const hasErrored = (errorMsg) => ({
  type: 'HAS_ERRORED',
  errorMsg
});