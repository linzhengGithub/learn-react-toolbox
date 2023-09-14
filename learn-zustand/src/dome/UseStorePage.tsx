import { useStore } from '../store/fitstStore';

const UseStorePage = () => {
  const { bears, increase, rest } = useStore()
  return (
    <>
      <button onClick={() => increase()}>bears { bears }</button>
      <button onClick={() => rest()}>rest bears</button>
    </>
  )
};

export default UseStorePage
