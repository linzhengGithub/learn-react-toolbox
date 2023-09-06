// import { useDispatch, useSelector } from "react-redux";
import { useDispatch, useSelector } from "../react-redux";

export default function ReactReduxHookPage() {
  const count = useSelector(({ count }) => count)

  const dispatch = useDispatch()

  const add = () => {
    dispatch({ type: 'ADD' })
  }

  return (
    <>
      ReactReduxHookPage
      <br/>
      <button onClick={add} > {count}</button>
    </>
  )
}
