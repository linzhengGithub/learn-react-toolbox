import React from "react"
import { NavigationContext, RouteContext } from "./Context"
import { normalizePathname } from "./utils"
import Outlet from "./Outlet"

export function useRoutes(routes) {
  const location = useLocation()
  const pathname = location.pathname

  return routes.map((route) => {
    const match = pathname.startsWith(route.path)

    return match ? route.children.map((child) => {
      let m = normalizePathname(child.path) === pathname
      return (
        m && (
          <RouteContext.Provider
            value={{ outlet: child.element }}
            // 子组件的渲染: 对父组件的监测
            children={route.element !== undefined ? route.element : <Outlet />}
          />
        )
      )
    }) : null
  })
};

export function useNavigate() {
  // 只做跳转
  const { navigator } = React.useContext(NavigationContext)

  return navigator.push
};

export function useLocation() {
  const { location } = React.useContext(NavigationContext)

  return location
};

export function useOutlet() {
  const { outlet } = React.useContext(RouteContext)

  return outlet
};
