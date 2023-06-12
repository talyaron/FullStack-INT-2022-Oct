import { createBrowserRouter } from "react-router-dom";
//paths
import { ABOUT_PATH, HOME_PATH } from "../consts/routes";
//components
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

export const ROUTE_MASTER = createBrowserRouter([
    {
        path: HOME_PATH,
        element: <Home/>
    },
    {
        path: ABOUT_PATH,
        element: <About/>
    }
])