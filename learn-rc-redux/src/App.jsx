import './App.css'
// import { Provider } from 'react-redux';
import { store } from './store';
// import MyRedux from './dome/MyRedux';
// import HooksPage from './dome/HooksPage';
import ReactReduxPage from './dome/ReactReduxPage';
import { useState } from 'react';
import { Provider } from './react-redux';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <Provider store={store}>
      <ReactReduxPage omg={0} />
    </Provider>
    // <div>
    //   <button onClick={() => setCount(count + 1)}>{count}</button>
    //   <ReactReduxPage omg={count} />
    // </div>
  )
}

export default App
