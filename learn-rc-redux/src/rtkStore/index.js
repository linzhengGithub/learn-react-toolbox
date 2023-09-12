// import { configureStore } from '@reduxjs/toolkit';
import { configureStore } from '../react-toolkit';

import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: { 
    counter: counterReducer
  }
})
