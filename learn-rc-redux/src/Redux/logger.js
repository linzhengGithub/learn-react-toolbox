export default function logger({ getState }) {
  return (next) => (action) => {
    // next -> 是 applyMiddleWare 函数中 compose 柯里化函数接收dispatch
    // action -> compose 接收的dispath的参数,即交互上面的 Add or Minus
    console.log('---------');

    console.log('action -> ', action.type)

    const prevValue = getState() // 更新前的值
    console.log('prev -> ', prevValue);

    const renterValue = next(action) // 更新后的值
    const nextValue = getState()
    console.log('next -> ', nextValue);

    console.log('---------');
    return renterValue
  }
}
