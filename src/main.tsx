import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary.tsx';
//import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary.tsx';
import { RouterProvider } from 'react-router/dom';
import { createHashRouter, Navigate } from 'react-router';
import { ErrorPage404 } from './components/ErrorPage404/ErrorPage404.tsx';
import { AnimalPage } from './components/AnimalPage/AnimalPage';
//import { AnimalPage } from './components/AnimalPage/AnimalPage';

const root = document.createElement('div');
root.classList.add('root');
document.body.appendChild(root);

const router = createHashRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Navigate replace to="/page/0" />,
        //element: <App />,
      },
      {
        path: '/main',
        element: <Navigate replace to="/page/0" />,
      },
      {
        path: '/page/:request/:pageNumber',
        element: <App />,
        children: [
          {
            path: '/page/:request/:pageNumber/animal/:uid',
            element: <AnimalPage />,
          },
        ],
      },
      {
        path: '/page/:pageNumber',
        element: (
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        ),
        children: [
          {
            path: '/page/:pageNumber/animal/:uid',
            element: <AnimalPage />,
          },
        ],
      },
      {
        path: '*',
        element: <ErrorPage404 />,
      },
    ],
  },
]);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
