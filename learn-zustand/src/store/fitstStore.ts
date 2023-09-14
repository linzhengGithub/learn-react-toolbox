import { create } from 'zustand'

interface CreateStore {
  bears: number
  increase: (by?: number) => void
  rest: () => void
}

export const useStore = create<CreateStore>()((set) => ({
  bears: 0,
  increase: (by = 1) => set((state) => ({ bears: state.bears + by })),
  rest: () => set({ bears: 0 }),
}))
