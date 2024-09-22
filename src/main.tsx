/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './index.css';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import NotFoundTitle from './components/404/NotFoundTitle.tsx';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <App />,
    errorElement: <NotFoundTitle />,
  },
  // {
  //   path: '/:tabValue',
  //   element: <Outlet />,
  //   errorElement: <NotFoundTitle />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
