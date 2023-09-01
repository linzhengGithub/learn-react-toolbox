import combineReducers from '../Redux/combineReducers';
import { createStore, applyMiddleWare, thunk, logger, promise } from '../Redux/index';

export function countReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'MINUS':
      return state - 1
    default:
      return state
  }
}

const store = createStore(
  combineReducers({
    count: countReducer
  }),
  applyMiddleWare(thunk, promise, logger)
)

export { store }
