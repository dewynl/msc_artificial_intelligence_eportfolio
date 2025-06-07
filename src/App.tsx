import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import HomePage from './pages/Homepage/HomePage';
import ModulePage from './pages/ModulePage/ModulePage';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/NotFound';

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/module/:moduleId',
    element: <ModulePage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
