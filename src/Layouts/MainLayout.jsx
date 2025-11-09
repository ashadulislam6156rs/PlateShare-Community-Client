import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Componants/Navbar/Navbar";
import Footer from "../Componants/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <header className="max-w-full mx-auto">
        <nav className="bg-[#012444] shadow-sm">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="max-w-full mx-auto min-h-[calc(100vh-350.5px)] bg-[#f7f7f7]">
        <Outlet></Outlet>
      </main>
      <footer className="bg-[#012444] max-w-full mx-auto">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
