import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Second from "./pages/Second.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Profile from "./pages/Profile.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage />
  },
  {
    path: "/wow",
    element: <Second />,
  },
  {
    path:"/profile/:userId",
    element:<Profile />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
