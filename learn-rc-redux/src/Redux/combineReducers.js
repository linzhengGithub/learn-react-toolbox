export default function combineReducers(reducers) {
  // 返回一个总的 reducer = (prevState, action) => nextState
  return function combination(state = {}, action) {
    let nextState = {}
    // 检查是否发生改变 避免组件做无必要的forceUpdate
    let hasChange = false

    for (const key in reducers) {
      const reducer = reducers[key];
      nextState[key] = reducer(state[key], action)
      hasChange = hasChange || nextState[key] !== state[key]
    }

    hasChange = hasChange || Object.keys(nextState).length !== Object.keys(state).length

    return hasChange ? nextState : state
  }
}
