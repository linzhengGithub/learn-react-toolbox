import React from "react"

export default function createRoutesFromChildren(children) {
  const routes = []

  React.Children.forEach(children, (child) => {
    const { props: { element, path, children } } = child
    const route = { element, path }

    if (children) {
      route.children = createRoutesFromChildren(children)
    }
    
    routes.push(route)
  })

  return routes
};
