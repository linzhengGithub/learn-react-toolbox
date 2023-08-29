export function createStore(reducer) {
  let currentState;
  let currentListeners = [];

  function getState() {
    return currentState
  }

  function subscribe(listener) {
    currentListeners.push(listener)

    return () => {
      const index = currentListeners.indexOf(listener)
      currentListeners.splice(index, 1)
    }
  }

  function dispatch(action) {
    currentState = reducer(currentState, action)
    currentListeners.forEach(listener => listener())
  }

  dispatch({type: 'abcdefg'})

  return { getState, dispatch, subscribe }
}

