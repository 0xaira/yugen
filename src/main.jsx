import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './components/About'
import Contact from './components/Contact'
import Cart from './components/Cart'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home.jsx'
import Products from './components/Products'
import SingleProduct from './components/SingleProduct'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <Home/>,
    errorElement : <ErrorPage/>,
  },
  {
    path : '/about',
    element : <About/>,
    errorElement : <ErrorPage/>,
  },
  {
    path : '/contact',
    element : <Contact/>,
    errorElement : <ErrorPage/>,
  },
  {
    path : '/cart',
    element : <Cart/>,
    errorElement : <ErrorPage/>,
  },
  {
    path : '/products/:id',
    element : <SingleProduct/>,
    errorElement : <ErrorPage/>,
  },
  {
    path : '/products',
    element : <Products/>,
    errorElement : <ErrorPage/>,
  },
  {
    path : '*',
    element : <ErrorPage/>,
    errorElement : <ErrorPage/>,
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
    <Home/>
  </RouterProvider>,
)
