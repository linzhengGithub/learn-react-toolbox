import './App.css'
// import { Provider } from 'react-redux';
// import { store } from './store';
// import MyRedux from './dome/MyRedux';
// import HooksPage from './dome/HooksPage';
// import ReactReduxPage from './dome/ReactReduxPage';
// import ReactReduxHookPage from './dome/ReactReduxHookPage';
import ReduxToolkitPage from './dome/ReduxToolkitPage';
// import { useState } from 'react';
// import { Provider } from './react-redux';

function App() {
  // const [count, setCount] = useState(0)
  return (
    // ---- 类组件
    // <Provider store={store}>
    //   <ReactReduxPage omg={0} />
    // </Provider>
    // ----
    // ---- 函数组件
    // <Provider store={store}>
    //   <ReactReduxHookPage />
    // </Provider>
    // ----
    // <div>
    //   <button onClick={() => setCount(count + 1)}>{count}</button>
    //   <ReactReduxPage omg={count} />
    // </div>
    <ReduxToolkitPage />
  )
}

export default App
