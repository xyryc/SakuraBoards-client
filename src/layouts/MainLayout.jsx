import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "../components/Loading";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);

  return (
    <>
      <div className="font-kaushan-script">
        <Navbar />

        {loading ? (
          <Loading />
        ) : (
          <div className="container mx-auto px-4 min-h-screen">
            <Outlet />
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
