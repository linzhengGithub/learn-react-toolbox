// js 状态管理库
type SetStateInternal<T> = {
  _(
    partial: T | Partial<T> | { _(state: T): T | Partial<T> }['_'],
    replace?: boolean | undefined
  ): void
}['_']

interface StoreApi<T> {
  getState: () => T
  setState: SetStateInternal<T>
  // 参数是监听状态值变化的函数,返回取消订阅函数
  subscribe: (listener: (state: T, prevState: T) => void) => () => void
  destory: () => void
}

type StateCreator<T> = (
  getState: StoreApi<T>['getState'],
  setState: StoreApi<T>['setState'],
  store: StoreApi<T>
) => T

type CreateStore = {
  <T>(createState: StateCreator<T>): StoreApi<T>
  <T>(): (createState: StateCreator<T>) => StoreApi<T>
}

export const createStore = () => ((createState) => createState ? createStoreImp(createState) : createStoreImp) as CreateStore

type CreateStoreImpl = <T>(createImpl: StateCreator<T>) => StoreApi<T>

export const createStoreImp: CreateStoreImpl = (createState) => {
  type TState = ReturnType<typeof createState>
  type Listener = (state: TState, prevState: TState) => void

  let state: TState
  const listeners: Set<Listener> = new Set()

  const getState: StoreApi<TState>['getState'] = () => state;

  const setState: StoreApi<TState>['setState'] = (partial, replace) => {
    const nextState = typeof partial === 'function' ? (partial as (state: TState) => TState)(state) : partial
    // 状态值改变,执行监听函数
    if (!Object.is(nextState, state)) {
      const prevState = state
      // replace 是否替换 否则合并
      state = replace ?? typeof nextState !== 'object' ? nextState as TState : Object.assign({}, state, nextState)
      listeners.forEach(listener => listener(state, prevState))
    }
  };

  const subscribe: StoreApi<TState>['subscribe'] = (listener) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  };

  const destory: StoreApi<TState>['destory'] = () => {
    listeners.clear()
  };

  const api = {
    getState,
    setState,
    subscribe,
    destory,
  };

  state = createState(getState, setState, api)

  return api
}
