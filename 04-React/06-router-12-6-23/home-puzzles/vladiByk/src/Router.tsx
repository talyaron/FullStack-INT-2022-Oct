import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Missing from "./pages/Missing";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects",
    element: <Projects />,
    children: [
      //Outlet
      { path: "kanbanIvi", element: <h1>kanban ivi</h1> },
      { path: "contact", element: <h1>This is my contact address...</h1> },
      { path: "testemonails", element: <h1>We are the best!!!!</h1> },
    ],
  },
  {
    path: "/*",
    element: <Missing />,
  },
]);

export default Router;
