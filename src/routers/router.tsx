import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import {  adminRoute } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App></App>,
    children: adminRoute,
  },
  {
    path: "login",
    element: <Login></Login>,
  },
]);

export default router;
