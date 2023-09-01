import { useReducer } from 'react';
import { countReducer } from '../store';

// useReducer - 接收3个参数; 1.reducer 2.初始值state 3.函数(返回一个 state, 处理一些复杂逻辑)
// 简单的可以使用 useState; 复杂的可以使用 useReducer
const init = (initArg) => initArg - 0
function HookUseReducer() {
  const [state, dispatch] = useReducer(countReducer, '0', init)
  return (
    <>
      <button onClick={() => dispatch({ type: 'ADD' })}>
        {state}
      </button>
    </>
  )

}

export default function HooksPage() {
  return (
    <>
      <HookUseReducer />
    </>
  )
}
