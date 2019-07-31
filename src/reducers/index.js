import { combineReducers } from 'redux';
import { animalsReducer, isLoading, hasErrored } from './animalsReducer';

const rootReducer = combineReducers({
  animals: animalsReducer,
  isLoading,
  errorMessage: hasErrored
})

export default rootReducer;