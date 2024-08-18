
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/UserManagement/CreateAdmin";
import CreateFaculty from "../pages/Admin/UserManagement/CreateFaculty";
import CreateStudent from "../pages/Admin/UserManagement/CreateStudent";
import AcademicSemester from "../pages/Admin/AcademicManagement/AcademicSemester";
import CreateAcademicSemester from "../pages/Admin/AcademicManagement/CreateAcademicSemester";
import CreateAcademicDepartment from "../pages/Admin/AcademicManagement/CreateAcademicDepartment";
import AcademicDepartment from "../pages/Admin/AcademicManagement/AcademicDepartment";
import CreateAcademicFaculty from "../pages/Admin/AcademicManagement/CreateAcademicFaculty";
import AcademicFaculty from "../pages/Admin/AcademicManagement/AcademicFaculty";
import StudentData from "../pages/Admin/UserManagement/StudentData";
import StudentDetails from "../pages/Admin/UserManagement/StudentDetails";
import SemesterRegistration from "../pages/Admin/CourseManagement/SemesterRegistration";
import RegistretedSemester from "../pages/Admin/CourseManagement/RegistretedSemester";
import CreateCourse from "../pages/Admin/CourseManagement/CreateCourse";
import Courses from "../pages/Admin/CourseManagement/Courses";
import OfferCourse from "../pages/Admin/CourseManagement/OfferCourse";
import OfferedCourses from "../pages/Admin/CourseManagement/OfferedCourses";

export const adminPaths = [
  {
    name: "Dashboaed",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester></CreateAcademicSemester>,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester></AcademicSemester>,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty></CreateAcademicFaculty>,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty></AcademicFaculty>,
      },
      {
        name: "Create A. Departmetn",
        path: "create-academic-department",
        element: <CreateAcademicDepartment></CreateAcademicDepartment>,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment></AcademicDepartment>,
      },
     
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
      {
        name: "Students Data",
        path: "student-data",
        element: <StudentData></StudentData>,
      },
      {
        
        path: "student-data/:studentId",
        element: <StudentDetails></StudentDetails>,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Semester Registration",
        path: "semester-registration",
        element: <SemesterRegistration/>,
      },
      {
        name: "Registrated Semester",
        path: "registrated-semester",
        element: <RegistretedSemester/>,
      },
     
      {
        name: "Create Course",
        path: "create-course",
        element:<CreateCourse/>,
      },
      {
        name: "Courses",
        path: "courses",
        element: <Courses/>,
      },
      {
        name: "Offer Course",
        path: "offer-course",
        element: <OfferCourse/>,
      },
      {
        name: "Offered Course",
        path: "offered-course",
        element: <OfferedCourses/>,
      },
    ],
  },
  
];

//  admin side bar
