import MyCourses from "../pages/Student/MyCourses";
import StudentDashboard from "../pages/Student/StudentDashboard";

export const studentPaths = [
  {
    name: "Dashboaed",
    path: "dashboard",
    element: <StudentDashboard></StudentDashboard>,
  },
  {
    name: "MyCourses",
    path: "mycourses",
    element:<MyCourses></MyCourses>,
  },
];
