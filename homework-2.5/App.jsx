import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import RootLayout from './layouts/RootLayout.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import UserPage from './pages/UserPage.jsx'
import UsersPage from './pages/UsersPage.jsx'
import { userLoader, usersLoader } from './loaders/usersLoaders.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/users" replace />,
      },
      {
        path: 'users',
        element: <UsersPage />,
        loader: usersLoader,
      },
      {
        path: 'users/:id',
        element: <UserPage />,
        loader: userLoader,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
