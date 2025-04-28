import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import HomePage from './pages/Homepage/HomePage';
import ModulePage from './pages/ModulePage/ModulePage';

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/module/:moduleId',
    element: <ModulePage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
