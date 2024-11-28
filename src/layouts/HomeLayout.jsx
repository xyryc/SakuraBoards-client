import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="container mx-auto px-4">
      {/* <Navbar/> */}
      <Outlet />
    </div>
  );
};

export default HomeLayout;
