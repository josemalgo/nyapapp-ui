import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Product from './pages/product'
import ErrorPage from './pages/error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/product',
        element: <Product />
      }
    ]
  }
])

export default router
