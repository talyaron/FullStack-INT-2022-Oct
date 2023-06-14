import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import ErrorPage from './pages/ErrorPage.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Projects from './pages/Projects.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/projects",
    element:<Projects />,
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path:"*",
    element:<ErrorPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
