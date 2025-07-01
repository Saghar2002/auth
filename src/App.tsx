import React from 'react';
import { createBrowserRouter , RouterProvider ,  Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Navigate to="/auth" replace />,
  },
  {
    path:"/auth",
    element: <Auth />,
  },
  {
    path:"/dashboard",
    element: <Dashboard />,
  },
  {
    path:"*",
    element: <Navigate to="/auth" replace />,
  },
]);

const App:React.FC = () => <RouterProvider router={router} />;

export default App;