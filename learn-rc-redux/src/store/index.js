import { createStore } from '../Redux/index';

function countReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'subtract':
      return state - 1
    default:
      return state
  }
}

const store = createStore(countReducer)

export { store }
