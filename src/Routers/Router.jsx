import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import PageError from "../Pages/Error/PageError/PageError";
import Home from "../Pages/Home/Home";
import Works from "../Components/Works/Works";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <PageError />,
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/works",
        Component: Works,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/register",
        Component: Register
      }
    ]
  }
]);

export default router;
