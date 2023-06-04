import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/HomePage";
import TestCreateSpa2 from "../pages/Test-Create-Spa";
import TestFrontend from "../pages/Test-Frontend";
import TestCreateButton from "../features/test1js/TestCreateButton";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/testCreateSpa2",
    element: <TestCreateSpa2 />
  },
  {
    path: "/testFrontend1",
    element: <TestFrontend />
  },
  {
    path: "/testCreateButton",
    element: <TestCreateButton />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
