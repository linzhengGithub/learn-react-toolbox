export default function promise({ dispatch }) {
  return (next) => (action) => {
    return isPromise(action) ? action.then(dispatch) : next(action)
  }
}

function isPromise(func) {
  return func instanceof Promise;
}
