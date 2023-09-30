import React from "react"
import { NavigationContext } from "./Context"

export function useRoutes(routes) {
  const pathname = window.location.pathname

  return routes.map((route) => {
    const match = pathname.startsWith(route.path)
    return match ? route.element : null
  })
};

export function useNavigate() {
  // 只做跳转
  const { navigator } = React.useContext(NavigationContext)

  return navigator.push
};

