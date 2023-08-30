export default function thunk({ getState, dispatch }) {
  return (next) => (action) => {
    // 处理函数版的 action
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return next(action);
  };
}
