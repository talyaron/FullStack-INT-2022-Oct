import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ErrorPage from "../src/pages/ErrorPage.tsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Form from './pages/Form.tsx';
import About from './pages/About.tsx';
import Project from './comp/Project/Project.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    children: [ 
      { path: '/about/project/:projectId', element: <Project setPlayers={undefined} projects={[]} project={undefined} /> }
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: '/form',
    element: <Form />,
    errorElement: <ErrorPage />,
  },


]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
