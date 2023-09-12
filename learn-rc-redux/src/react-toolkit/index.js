import { combineReducers } from 'redux';
import { createStore } from '../Redux';
import createSlice from './createSlice';

export const configureStore = ({ reducer }) => {
  const rootReducer = combineReducers(reducer)
  const store = createStore(rootReducer)

  return store
}

export { createSlice }
