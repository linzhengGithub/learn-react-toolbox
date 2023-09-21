import { StateCreator } from '../vanilla';
import { produce } from 'immer';

type Immer = <T>(createState: StateCreator<T>) => StateCreator<T>

export const immer: Immer = (createState) => (set, get, store) => {

  store.setState = (updater, replace, ...a) => {
    type T = ReturnType<typeof createState>

    const nextState = (typeof updater === 'function' ? produce(updater as any) : updater) as ((s: T) => T | T | Partial<T>)

    return set(nextState, replace, ...a)
  }


  return createState(store.setState, get, store)
}
