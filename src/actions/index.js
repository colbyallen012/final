export const showAnimals = (animals) => ({
  type: 'SHOW_ANIMALS',
  animals
})

export const isLoading = (isLoading) => ({
  type: 'IS_LOADING',
  isLoading
});

export const hasErrored = (errorMessage) => ({
  type: 'HAS_ERRORED',
  errorMessage
});

export const showDonations = (donations) => ({
  type: 'SHOW_DONATIONS',
  donations
})