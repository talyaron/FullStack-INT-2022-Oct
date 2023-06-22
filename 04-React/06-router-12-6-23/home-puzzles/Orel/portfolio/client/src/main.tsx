import React from 'react'

import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//pages
import App from './App.tsx'
import ErrorPage from './pages/ErrorPage.tsx';
import BlogById from './pages/BlogById.tsx';
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/home",
    element: <App/>,
  },
  {
    path: "/blog",
    element: <App/>,
    children: [
      {
        path: "blog/:blogId",
        element: <BlogById />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
