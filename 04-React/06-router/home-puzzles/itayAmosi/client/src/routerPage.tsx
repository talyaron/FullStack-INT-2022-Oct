// import ErrorPage from "./pages/ErrorPage.tsx";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Form from "./pages/Form.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import About from "./pages/About.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
      path: "/form",
      element: <Form />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <About />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/profile/:userId",
      // element: <Portfolio />,
      children: [ //Outlet
        { path: "about", element: <h1>About me</h1> },
        { path: "contact", element: <h1>This is my contact address...</h1> },
        { path: "testemonails", element: <h1>We are the best!!!!</h1> },
      ],
  },
]);
