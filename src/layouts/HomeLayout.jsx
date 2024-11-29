import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <>
      <div className="font-kaushan-script">
        <Navbar />
        <div className="container mx-auto px-4 min-h-[calc(100vh-232px)] py-12">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomeLayout;
