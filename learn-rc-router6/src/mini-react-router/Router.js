import React from 'react'
import { NavigationContext } from './Context'

export default function Router({ navigator, children, location }) {
  // 函数组件,防止重复渲染组件,使用useMemo缓存
  let navigationContext = React.useMemo(() => ({ navigator, location }), [navigator, location])

  return (
    <NavigationContext.Provider value={navigationContext}>
      {children}
    </NavigationContext.Provider>
  )
}
