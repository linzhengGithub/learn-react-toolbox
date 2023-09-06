import { Component } from "react";
// import { connect } from 'react-redux';
import { connect } from '../react-redux';
// import { bindActionCreators } from 'redux';
import { bindActionCreators } from '../Redux/index';

// 接收一个 (state,[ownProps])
const mapStateToProps = (state, ownProps) => {
  // 如果指定接收一个props, 当这个props发生改变,那么mapStateToProps就会被重新计算, mapDispatchToProps也会被重新调用, 注意使用性能
  // console.log('ownProps', ownProps);
  return state
}
// 数据类型 - function | object
// const mapDispatchToProps = {  // 以下写法他会在每个函数前面自动帮你添加 dispatch ,因此他不会给你返回原本的dispatch
//   add: () => ({ type: 'ADD' }),
//   minus: () => ({ type: 'MINUS' })
// }
const mapDispatchToProps = (dispatch) => {
  // 我想要dispatch
  let creators = {
    add: () => ({ type: 'ADD' }),
    minus: () => ({ type: 'MINUS' })
  }
  // 给每个 key 加上第二个参数(dispatch)
  creators = bindActionCreators(creators, dispatch)

  return { dispatch, ...creators }
}

class ReactReduxPage extends Component {
  render() {
    console.log('props', this.props);
    // eslint-disable-next-line react/prop-types
    const { count, dispatch, add } = this.props
    return (
      <>
        <div>rc-redux</div>
        <button onClick={() => dispatch({ type: 'ADD' })}>dispatch: {count}</button>
        <button onClick={add}>add: {count}</button>
      </>
    )
  }
}

// 类组件:
// Provider 和 connect 组合使用 - connect(HOC高阶组件: 是一个函数)
// mapStateToProps - 是一个函数;返回父组件传递下来的, 子组件通过 this.props 使用
// 1.
// (state) => ({ state })
// 2.
// ({count}) => ({ count })

// mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxPage);
