import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import UpdateKeyboard from "../pages/UpdateKeyboard";
import AddKeyboard from "../pages/AddKeyboard";
import AllKeyboards from "../pages/AllKeyboards";
import KeyboardDetails from "../pages/KeyboardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <AllKeyboards />,
        loader: () => fetch("http://localhost:5000/keyboards"),
      },
      {
        path: "/addKeyboard",
        element: <AddKeyboard />,
      },
      {
        path: "/updateKeyboard/:id",
        element: <UpdateKeyboard />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/keyboards/${params.id}`),
      },
      {
        path: "/keyboards/details/:id",
        element: <KeyboardDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/keyboards/${params.id}`),
      },
    ],
  },
]);

export default router;
