import React from 'react';
import Login from '../components/Login';
import HomePage from '../components/HomePage';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from '../components/Register';

const Content = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/home',
      element: <HomePage />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);

  return (
    <>
    <div>
      Welcome To Flight Management System
    </div>
      {/* <Login /> <Browse /> */}
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Content;
