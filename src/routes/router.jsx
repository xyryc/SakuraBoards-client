import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import UpdateKeyboard from "../pages/UpdateKeyboard";
import AddKeyboard from "../pages/AddKeyboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/addKeyboard",
        element: <AddKeyboard />,
      },
      {
        path: "/updateKeyboard",
        element: <UpdateKeyboard />,
      },
    ],
  },
]);

export default router;
