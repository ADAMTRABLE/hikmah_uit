import { createBrowserRouter, Navigate } from "react-router-dom";

import PublicLayout from '../layouts/PublicLayout';
import AdminLayout from "../layouts/AdminLayout";

import PulicHome from '../pages/public/landing/Home';
import Dashboard from "../pages/admin/dashboard/Dashboard";
import User from "../pages/admin/users/User";

// New imports
import CoursesHome from '../pages/public/courses/Course/CourseHome';
import EventsPage from "../pages/public/Events/EventsPage";

import LibraryPage from "../pages/public/Library/LibraryPage";

import QuranArabicCourse from "../pages/public/courses/Course/QuranArabicCourse";

import Home from "../pages/public/landing/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <PulicHome />,
      },
      {
        path: "/courses",
        children: [
          {
            index: true,
            element: <CoursesHome />,
          },
                    {
            path: "quranic-arabic",
            element: <QuranArabicCourse />,
          },
      
        ]
      },
      {
        path: "/events",
        children: [
          {
              index: true,
            element: <EventsPage/>,
          },
      
        ]
      },
      {
        path: "/library",
        children: [
          {
              index: true,
            element: <LibraryPage/>,
          },
      
        ]
      },

        {
        path: "/dashboard",
        children: [
          {
              index: true,
            element: <Home/>,
          },
      
        ]
      }
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "users",
        element: <User />
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  }
]);
