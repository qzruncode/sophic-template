import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import App from './app';
import Test1 from './test1';
import Test2 from './test2';

const createRouter = props => {
  return createBrowserRouter([
    {
      path: '/',
      element: <App appPubSub={props.appPubSub} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/data/test1",
          element: <Test1 />,
        },
        {
          path: "/data/test2",
          element: <Test2 />,
        },
      ],
    },
  ]);
}

export default createRouter
