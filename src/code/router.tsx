import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import App from './app';
import Test1 from './test1';
import Test2 from './test2';

const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/sub',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "test1",
          element: <Test1 />,
        },
        {
          path: "test2",
          element: <Test2 />,
        },
      ],
    },
  ]);
}

export default createRouter
