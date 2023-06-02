import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/HomePage";
import TestCreateSpa2 from "../pages/Test-Create-Spa";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/testCreateSpa2",
    element: <TestCreateSpa2 />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
