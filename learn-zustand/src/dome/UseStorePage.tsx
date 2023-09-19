import { memo } from 'react';
import useStore from '../store/firstStore';

const UseStorePage = () => {
  const { bears, increase, rest } = useStore()
  return (
    <>
      <button onClick={() => increase()}>bears {bears}</button>
      <button onClick={() => rest()}>rest bears</button>
      <Child />
    </>
  )
};

// do not overuse custom hooks
const Child = memo(() => {
  const bears = useStore(
    (state: any) => state.bears,
    // equality 为 true 不更新的意思
    // a,b 是上面函数解构出来的 state 中的 bears
    (a: any, b: any) => true
  )
  console.log('child--');

  return (
    <div>
      <h3>Child</h3>
      <p>{bears}</p>
    </div>
  )

})

export default UseStorePage
