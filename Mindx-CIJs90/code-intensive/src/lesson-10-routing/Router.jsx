import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root, {Loader as RootLoader}  from "./Root";
import ErrorPage from './ErrorPage';
import Contact from './Contact';
import Home from './Home';
import CreateEvent from './CreateEvent';

const router = createBrowserRouter([
  {
    path: '/home',  // thinh
    element: <Home />,
    errorElement: <ErrorPage />,
    //loader: RootLoader,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: RootLoader
      }
    ],
    path: '/createEvent',
    element: <CreateEvent />,
    errorElement: <ErrorPage />,
    //loader: RootLoader,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: RootLoader
      }
    ]
  }
]);

export default function Router(){
    return(
        <RouterProvider router={router} />
    )
}