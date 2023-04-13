import { createBrowserRouter } from 'react-router-dom'
import Product from './pages/product'
import ErrorPage from './pages/error'
import Dashboard from './pages/dashboard'
import Customer from './pages/customer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/products',
        element: <Product />
      },
      {
        path: '/customers',
        element: <Customer />
      }
    ]
  }
])

export default router
