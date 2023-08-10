import React, { useState } from "react";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import NotFound from "routes/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

const loginRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Auth />,
      },
    ],
  },
]);

const AppRouter = ({ isLoggedIn }) => {
  console.log(isLoggedIn);
  return (
    <>
      <RouterProvider router={isLoggedIn ? router : loginRouter} />
    </>
  );
};

export default AppRouter;
