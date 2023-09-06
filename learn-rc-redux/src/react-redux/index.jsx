import React, { useCallback, useContext, useLayoutEffect, useReducer, useState } from "react"
import { bindActionCreators } from "../Redux"

// 1. 创建 context 对象
const Context = React.createContext()

// 2. Provider 组件传递 value (store)
// eslint-disable-next-line react/prop-types
export function Provider({ store, children }) {
  return <Context.Provider value={store}>{children}</Context.Provider>
}

// 3. 子孙组件消费 Provider 传递下来的 value
//  3.1 contextType - 只能用在类组件中, 只能订阅单一的context来源
//  3.2 useContext - 只能用在类组件或者自定义Hook中
//  3.3 Consumer - 没有组件限制, 使用方式需要注意比较麻烦
// eslint-disable-next-line react/display-name
export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => (props) => {
  const store = useContext(Context)
  const { getState, dispatch, subscribe } = store

  const stateProps = mapStateToProps(getState()) // 拿到store上面的所以状态值; 因为mapStateProps是一个函数并接收一个参数
  let dispatchProps = { dispatch }

  // mapDispatchToProps 类型 function | object
  if (typeof mapDispatchToProps === 'function') {
    dispatchProps = mapDispatchToProps(dispatch)
  } else if (typeof mapDispatchToProps === 'object') {
    dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
  }

  // const [,forceupdate] = useReducer(x => x + 1, 0)
  const forceUpdate = useForceUpdate()

  // 不使用 useEffect 因为它会延迟更新
  // 副作用 - 更新state 
  useLayoutEffect(() => {
    const unsubscribe = subscribe(() => forceUpdate())
    return () => { unsubscribe() }
  }, [subscribe])

  return <WrappedComponent {...props} {...stateProps} {...dispatchProps} />
}

// 自定义 forceUpdate
const useForceUpdate = () => {
  const [state, setState] = useState(0)
  const update = useCallback(() => {
    setState(prev => prev + 1)
  }, [])
  return update
}

export const useSelector = (selector) => {
  const store = useContext(Context)
  const { getState, subscribe } = store
  // selector 是一个函数,接收一个参数(所有的状态值getState), 外面传入的 selector 在外面怎么玩都不归我管, 我只需要传出去所有状态值就行
  const selectedState = selector(getState())

  const forceUpdate = useForceUpdate()
  useLayoutEffect(() => {
    const unsubscribe = subscribe(() => forceUpdate())
    return () => { unsubscribe() }
  }, [subscribe])

  return selectedState
}

export const useDispatch = () => {
  const store = useContext(Context)
  const { dispatch } = store

  return dispatch
}



