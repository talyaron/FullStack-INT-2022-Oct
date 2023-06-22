import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ErrorPage from './pages/Second/ErrorPage.tsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/wow",
    element: <div>Maxim</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
