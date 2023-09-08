import { useLayoutEffect, useReducer } from 'react';
import { store } from '../rtkStore';
import { increment } from '../rtkStore/counterSlice';

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
    </>
  )
}
