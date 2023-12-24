import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Appcontainer from '../homePage/Appcontainer';
import CreateEvent from '../event/CreateEvent';

import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: '/home',  // thinh
    element: <Appcontainer />,
    errorElement: <ErrorPage />,

    path: '/createEvent',
    element: <CreateEvent />,
    errorElement: <ErrorPage />,
    
  }
]);

export default function Router(){
    return(
        <RouterProvider router={router} />
    )
}