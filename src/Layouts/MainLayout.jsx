import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Componants/Navbar/Navbar";
import Footer from "../Componants/Footer/Footer";
import Loading from "../Loading/Loading";

const MainLayout = () => {
  const navigatation = useNavigation();

  return (
    <div>
      <header className="max-w-full mx-auto">
        <nav className="bg-[#012444] shadow-sm">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="max-w-full mx-auto min-h-[calc(100vh-350.5px)] bg-[#f7f7f7]">
        {navigatation?.state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
      </main>
      <footer className="bg-[#012444] max-w-full mx-auto">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
