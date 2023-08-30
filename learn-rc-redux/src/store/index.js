import { createStore, applyMiddleWare, thunk, logger, promise } from '../Redux/index';

function countReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'MINUS':
      return state - 1
    default:
      return state
  }
}

const store = createStore(countReducer, applyMiddleWare(thunk, promise, logger))

export { store }
