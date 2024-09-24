/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './index.css';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';

import App from './App.tsx';
import NotFoundTitle from './components/404/NotFoundTitle.tsx';
import HomePageComponent from './components/HomePage/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundTitle />,
    children: [
      {
        index: true,
        loader() {
          return redirect('/home');
        },
      },
      { path: '/home', element: <HomePageComponent /> },
      {
        path: '/calendar',
      },
      {
        path: '/advice',
      },
      {
        path: '/profile',
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
