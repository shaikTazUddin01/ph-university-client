import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import { adminPaths } from "./admin.routes";
import { routePaths } from "../utiles/routerGenerator";
import { studentPaths } from "./student.routes";
import { facultyPaths } from "./faculty.routes";
import ProtectedRoute from "../component/layout/ProtectedRoute";
import ChangePassword from "../pages/Student/ChangePassword";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <ProtectedRoute role="admin"><App></App></ProtectedRoute>,
    children: routePaths(adminPaths),
  },
  {
    path: "/faculty",
    element:  <ProtectedRoute role="faculty"><App></App></ProtectedRoute>,
    children: routePaths(facultyPaths),
  },
  {
    path: "/student",
    element:  <ProtectedRoute role="student"><App></App></ProtectedRoute>,
    children: routePaths(studentPaths),
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "change-pass",
    element: <ChangePassword/>,
  },
]);

export default router;
