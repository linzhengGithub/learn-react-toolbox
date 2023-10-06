import React from "react"
import { NavigationContext, RouteContext } from "./Context"
// import Outlet from "./Outlet"
import { matchRoutes } from 'react-router-dom';

export function useRoutes(routes) {
  const location = useLocation()
  const pathname = location.pathname

  const matches = matchRoutes(routes, { pathname })

  return renderMatches(matches)
};

function renderMatches(matches) {
  if (matches == null) return null

  return matches.reduceRight((outlet, match) => {
    return (
      <RouteContext.Provider
        value={{ outlet, matches }}
        children={match.route.element || outlet}
      />
    )
  }, null)
}

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

export function useParams() {
  const { matches } = React.useContext(RouteContext)
  const routeMatch = matches[matches.length - 1]

  return routeMatch ? routeMatch.params : {}
};

