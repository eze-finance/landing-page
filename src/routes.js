import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "src/layouts/HomeLayout";
// import InnerLayout from "src/layouts/InnerLayout";
export const routes = [
  {
    exact: true,
    path: "/",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home")),
  },
  {
    exact: true,
    path: "/clique",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Clique")),
  },
  {
    exact: true,
    path: "/coming-soon",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Comingsoon")),
  },
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("src/views/errors/NotFound")),
  },

  {
    component: () => <Redirect to="/404" />,
  },
];
