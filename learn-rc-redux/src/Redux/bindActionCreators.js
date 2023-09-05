function bindActionCreator(creator, dispatch) {
  return (...arg) => dispatch(creator(...arg))
}

export default function bindActionCreators(creators, dispatch) {
  let newCreators = {}
  for (const key in creators) {
    newCreators[key] = bindActionCreator(creators[key], dispatch)
  }
  return newCreators
}
