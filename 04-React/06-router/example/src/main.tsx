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
    errorElement: <ErrorPage />,
  },
  {
    path: "/wow",
    element: <Second />,
  },
  {
    path: "/profile/:userId",
    element: <Profile />,
    children: [ //Outlet
      { path: "about", element: <h1>About me</h1> },
      { path: "contact", element: <h1>This is my contact address...</h1> },
      { path: "testemonails", element: <h1>We are the best!!!!</h1> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
