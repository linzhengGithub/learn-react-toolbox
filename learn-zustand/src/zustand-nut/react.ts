// react 状态管理库

// import { useSyncExternalStore } from 'react';
import { StateCreator, StoreApi, createStore } from './vanilla';
import useSyncExternalStoreExports from "use-sync-external-store/shim/with-selector";
const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;

// 推断类型
type ExtractState<S> = S extends { getState: () => infer T } ? T : never;

// 从 StoreApi 中 pick 出属性
type ReadonlyStoreApi<T> = Pick<StoreApi<T>, "getState" | "subscribe">;

// 在 ReadonlyStoreApi 的基础上增加 getServerState
type WithReact<S extends ReadonlyStoreApi<unknown>> = S & {
  getServerState?: () => ExtractState<S>;
};

export type UseBoundStore<S extends WithReact<ReadonlyStoreApi<unknown>>> = {
  (): ExtractState<S>;
  <U>(
    selector: (state: ExtractState<S>) => U,
    equals?: (a: U, b: U) => boolean
  ): U;
} & S;

type Create = {
  <T>(createState: StateCreator<T>): UseBoundStore<StoreApi<T>>;
  <T>(): (createState: StateCreator<T>) => UseBoundStore<StoreApi<T>>;
};

// 要求兼容 ts和js 
export const create = function <T>(createState: StateCreator<T>) {
  return createState ? createImpl(createState) : createImpl
} as Create

const createImpl = function <T>(createState: StateCreator<T>) {
  const api = typeof createState === 'function' ? createStore(createState) : createState
  const useBoundStore = (selector?: any, equalityFn?: any) => useStore(api, selector, equalityFn)

  return useBoundStore
}

export function useStore<TState, StateSlice>(
  api: WithReact<StoreApi<TState>>,
  selector: (state: TState) => StateSlice = api.getState as any,
  equalityFn: (a: StateSlice, b: StateSlice) => boolean
) {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  )

  return slice
}


