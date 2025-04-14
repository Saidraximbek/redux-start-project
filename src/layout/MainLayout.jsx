import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
    <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
     <Footer />
    </>
  );
}

export default MainLayout;
