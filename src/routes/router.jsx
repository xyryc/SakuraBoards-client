import { createBrowserRouter } from "react-router-dom";
import UpdateKeyboard from "../pages/UpdateKeyboard";
import AddKeyboard from "../pages/AddKeyboard";
import AllKeyboards from "../pages/AllKeyboards";
import KeyboardDetails from "../pages/KeyboardDetails";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Users from "../pages/Users";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/banner.json"),
        children: [
          {
            path: "/",
            element: <AllKeyboards />,
            loader: () => fetch("http://localhost:5000/keyboards"),
          },
        ],
      },

      {
        path: "/addKeyboard",
        element: (
          <PrivateRoute>
            <AddKeyboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateKeyboard/:id",
        element: (
          <PrivateRoute>
            <UpdateKeyboard />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/keyboards/${params.id}`),
      },
      {
        path: "/keyboards/details/:id",
        element: <KeyboardDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/keyboards/${params.id}`),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/users",
        element: (
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/users"),
      },
    ],
  },
]);

export default router;
