import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
 

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello World!</div>
  }
])

const root = document.getElementById('root')
if (root !== null){
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
}
