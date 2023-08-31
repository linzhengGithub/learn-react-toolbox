import { Component } from "react";
import { store } from '../store';

export default class MyRedux extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  add = () => {
    store.dispatch({ type: 'ADD' })
  }
  minus = () => {
    setTimeout(() => { store.dispatch({ type: 'MINUS' }) }, 1000)
  }

  promiseMinus = () => {
    store.dispatch(
      Promise.resolve({
        type: "MINUS",
      })
    )
  };

  render() {
    return (
      <>
        <div>MyRedux</div>
        <div>{store.getState().count}</div>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        <button onClick={this.promiseMinus}>promiseMinus</button>
      </>
    )
  }
}
