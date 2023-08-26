import React, { useState } from "react"

export default function CreateForm(props) {
  const [state, setState] = useState({})
  const updateState = (newState) => {
    setState({ ...state, ...newState })
  }
  return (
    <>
      {props.children({ state, updateState })}
    </>
  )
}
