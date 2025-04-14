// App Router (main)
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

export default router;