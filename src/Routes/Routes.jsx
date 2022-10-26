import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Checkout from "../pages/Checkout/Checkout";
import CoursePage from "../pages/CoursePage/CoursePage";
import Courses from "../pages/Courses/Courses";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/register",
        element: <Register></Register>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://learn-code-server.vercel.app/courses"),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/course/:id",
        element: <CoursePage></CoursePage>,
        loader: ({ params }) => {
          return fetch(
            `https://learn-code-server.vercel.app/course/${params.id}`
          );
        },
        errorElement: <ErrorPage></ErrorPage>,
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
        errorElement: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
