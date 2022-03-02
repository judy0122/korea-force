import React from "react";

const routes = [
  {
    path: "/",
    element: React.createElement(
      React.lazy(() => import("@src/pages/Redirect"))
    ),
  },
  {
    path: "/login",
    element: React.createElement(React.lazy(() => import("@src/pages/Login"))),
  },
  {
    path: "/main",
    element: React.createElement(React.lazy(() => import("@src/pages/Main"))),
  },
];

export default routes;
