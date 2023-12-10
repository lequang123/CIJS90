import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root, {Loader as RootLoader}  from "./Root";
import ErrorPage from './ErrorPage';
import Contact from './Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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