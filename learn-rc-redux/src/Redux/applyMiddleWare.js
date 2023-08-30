import compose from "./compose"

export default function applyMiddleWare(...middleWares) {
  return (createStore) => (reducer) => {
    const store = createStore(reducer)
    let dispatch = store.dispatch

    // 中间件
    const midAPI = {
      getState: store.getState,
      dispatch: (action, ...arg) => dispatch(action, ...arg)
    }
    const middleWareChain = middleWares.map(middleWare => middleWare(midAPI))

    // 加强版的dispatch - 把所有的中间件的函数都执行了,同时执行store.dispatch
    dispatch = compose(...middleWareChain)(store.dispatch)

    return {
      ...store,
      dispatch
    }
  }
}
