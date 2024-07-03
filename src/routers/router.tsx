import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import { adminPaths } from "./admin.routes";
import { routePaths } from "../utiles/routerGenerator";
import { studentPaths } from "./student.routes";
import { facultyPaths } from "./faculty.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App></App>,
    children: routePaths(adminPaths),
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routePaths(facultyPaths),
  },
  {
    path: "/student",
    element: <App></App>,
    children: routePaths(studentPaths),
  },
  {
    path: "login",
    element: <Login></Login>,
  },
]);

export default router;
