import { useLayoutEffect, useReducer } from 'react';
import { store } from '../rtkStore';
import { increment, incrementByAmount } from '../rtkStore/counterSlice';

export default function ReduxToolkitPage() {
  const count = store.getState().counter.value

  const [, forceUpdate] = useReducer(x => x + 1, 0)
  useLayoutEffect(() => {
    const unsubscribe = store.subscribe(() => forceUpdate())
    return unsubscribe
  }, [])

  return (
    <>
      <h3>ReduxToolkitPage</h3>
      <button onClick={() => store.dispatch(increment())}>{count}</button>
      <br/>
      <button onClick={() => store.dispatch(incrementByAmount(100))}>
        每次累加100：{count}
      </button>
      <br/>
      <button onClick={() => store.dispatch({type: "counter/increment"})}>
        {count}
      </button>
    </>
  )
}
