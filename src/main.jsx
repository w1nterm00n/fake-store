import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/home-page/Home'
import Shop from './components/shop-page/Shop'
import Cart from './components/cart-page/Cart'
import Navbar from './components/navbar/Navbar'
import ErrorPage from './components/ErrorElement'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Home /> */}
  </React.StrictMode>,
)
