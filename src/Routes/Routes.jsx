import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Checkout from "../pages/Checkout/Checkout";
import CoursePage from "../pages/CoursePage/CoursePage";
import Courses from "../pages/Courses/Courses";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://learn-code-server.vercel.app/courses"),
      },
      {
        path: "/course/:id",
        element: <CoursePage></CoursePage>,
        loader: ({ params }) => {
          return fetch(
            `https://learn-code-server.vercel.app/course/${params.id}`
          );
        },
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://learn-code-server.vercel.app/course/${params.id}`
          );
        },
      },
    ],
  },
]);
