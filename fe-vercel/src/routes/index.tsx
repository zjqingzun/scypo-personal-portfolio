// App Router (main)
import { createBrowserRouter } from 'react-router-dom';
import About from '../pages/About/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <About />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

export default router;