import React from "react";

const routes = [
  {
    path: "/",
    element: React.createElement(React.lazy(() => import("@src/pages/Login"))),
  },
];

export default routes;
