import { createReducer } from "@reduxjs/toolkit"
import createAction from "./createAction"

export default function createSlice({ name, initialState, reducers }) {
  const reducerNames = Object.keys(reducers)

  const actionsCreators = {}
  const sliceCaseReducersByType = {}

  reducerNames.forEach(reducerName => {
    const maybeReducerWithPrepare = reducers[reducerName]
    const type = `${name}/${reducerName}`

    sliceCaseReducersByType[type] = maybeReducerWithPrepare
    actionsCreators[reducerName] = createAction(type)
  })

  function buildReducer() {
    return createReducer(initialState, (builder) => {
      for (const key in sliceCaseReducersByType) {
        builder.addCase(key, sliceCaseReducersByType[key])
      }
    })
  }

  let _reducer

  return {
    name,
    actions: actionsCreators,
    reducer: (state, action) => {
      if (!_reducer) _reducer = buildReducer()
      return _reducer(state, action)
    }
  }
}

