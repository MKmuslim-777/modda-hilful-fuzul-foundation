import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layouts/MainLayout.jsx";
import PageError from "./Pages/Error/PageError/PageError.jsx";
import Home from "./Pages/Home/Home.jsx";
import Works from "./Components/Works/Works.jsx";

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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
