import React, { useCallback, useMemo } from "react"
import { NavigationContext, RouteContext } from "./Context"
import { matchPath, matchRoutes } from 'react-router-dom';

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
  // 跳转
  const { navigator } = React.useContext(NavigationContext)

  const navigate = useCallback(
    (to, options = {}) => {
      if (typeof to === "number") {
        navigator.go(to);
        return;
      }
      (!!options.replace ? navigator.replace : navigator.push)(
        to,
        options.state
      );
    },
    [navigator]
  );

  return navigate;
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

export function useMatch(pattern) {
  const { pathname } = useLocation()

  return useMemo(() => matchPath(pattern, pathname), [pathname, pattern])
};

export function useResolvedPath(to) {
  const { pathname } = useLocation()

  return useMemo(() => ({
    pathname: to,
    search: '',
    hash: ''
  }), [pathname])
};
