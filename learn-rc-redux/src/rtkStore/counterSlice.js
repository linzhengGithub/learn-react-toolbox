import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // "reducers" - 不是真的 reducers, 这里需要 createSlice 重新处理返回每个为纯函数的 reducer
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value += 1
    },
    incrementByAmount: (state, actions) => {
      state.value += actions.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
