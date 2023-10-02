import { createBrowserHistory } from 'history';
import React, { useLayoutEffect, useState } from 'react';
import Router from './Router';

export default function BrowserRouter({ children }) {
  // 组件卸载之前用
  let historyRef = React.useRef()

  if (!historyRef.current) {
    historyRef.current = createBrowserHistory()
  }

  const history = historyRef.current;

  const [state, setState] = useState({ location: history.location })

  useLayoutEffect(() => {
    history.listen(setState) // 这个函数当 history 更新之后会自动执行 setState(location)
  }, [history])

  return (
    <Router navigator={history} children={children} location={state.location} />
  );
}
