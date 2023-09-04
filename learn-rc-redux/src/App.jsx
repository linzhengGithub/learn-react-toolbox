import './App.css'
import { Provider } from 'react-redux';
import { store } from './store';
// import MyRedux from './dome/MyRedux';
// import HooksPage from './dome/HooksPage';
import ReactReduxPage from './dome/ReactReduxPage';
import { useState } from 'react';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div>
      <Provider store={store}>
        {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
        {/* <ReactReduxPage omg={count} /> */}
        <ReactReduxPage />
      </Provider>
    </div>
  )
}

export default App
