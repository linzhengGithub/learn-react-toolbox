export default function createStore(reducer, enhancer) {
  // 增强器
  if(enhancer) {
    // 使用增强器返回一个全新的store
    return enhancer(createStore)(reducer)
  }
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
    console.log(action);
    currentState = reducer(currentState, action)
    currentListeners.forEach(listener => listener())
  }

  dispatch({type: 'abcdefg'})

  return { getState, dispatch, subscribe }
}

