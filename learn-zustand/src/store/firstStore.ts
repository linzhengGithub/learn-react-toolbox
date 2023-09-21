import { create } from '../zustand-nut/react'
// import { create } from 'zustand'
import { immer } from '../zustand-nut/middleware/immer'

interface CreateStore {
  bears: number
  increase: (by?: number) => void
  rest: () => void
}

const useStore = create(immer<CreateStore>((set) => ({
  bears: 0,
  increase: (by = 1) =>
    set((state) => {
      state.bears += by
    }),
  rest: () => set({ bears: 0 }),
})))

export default useStore
