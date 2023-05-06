import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from './components/Welcome/Welcome';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />
  },
  {
    path: "/clock",
    element: <App />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
