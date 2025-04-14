import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Layout from './components/layout/Layout';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en');

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout language={language} onLanguageChange={setLanguage} />,
      children: [
        {
          path: '/',
          element: <Home language={language} />,
        },
        {
          path: '/home',
          element: <Home language={language} />,
        },
        {
          path: '/about',
          element: <About language={language} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
