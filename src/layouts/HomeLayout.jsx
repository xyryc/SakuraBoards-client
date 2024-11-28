import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="container mx-auto px-4 font-kaushan-script">
      <Navbar/>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
