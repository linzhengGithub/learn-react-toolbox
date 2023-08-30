export default function compose(...funcs) {
  if (!funcs.length) {
    return (arg) => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }

  // a -> prev value
  // b -> next value
  return funcs.reduce((a, b) => (...arg) => a(b(...arg)))
}
