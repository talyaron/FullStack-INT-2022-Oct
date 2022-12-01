import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import Portfolio from "../Components/Portfolio/Portfolio";
import Contact from "../Components/Contact/Contact";

import {ABOUT_PATH, HOME_PATH, PORTFOLIO_PATH, CONTACT_PATH} from "../consts/routes"


const RouteMaster = [

    {
        path: ABOUT_PATH,
        component: About
    },
    {
        path: HOME_PATH,
        component: Home
    },
    {
        path: PORTFOLIO_PATH,
        component: Portfolio
    },{
        path: CONTACT_PATH,
        component: Contact
    },

]
export default RouteMaster;