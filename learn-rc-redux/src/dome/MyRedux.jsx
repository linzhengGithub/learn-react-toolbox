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
  render() {

    return (
      <>
        <div>MyRedux</div>
        <div>{store.getState()}</div>
        <button onClick={this.add}>Add</button>
      </>
    )
  }
}
