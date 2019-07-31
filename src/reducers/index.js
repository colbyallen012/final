import { combineReducers } from 'redux';
import { animalsReducer, isLoading, hasErrored } from './animalsReducer';
import { donationsReducer } from './donationReducer'

const rootReducer = combineReducers({
  animals: animalsReducer,
  isLoading,
  errorMessage: hasErrored,
  donations: donationsReducer,
  addDonation: donationsReducer
})

export default rootReducer;