import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Componants/Navbar/Navbar";
import Footer from "../Componants/Footer/Footer";
import Loading from "../Loading/Loading";
import { Bounce, ToastContainer } from "react-toastify";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <div className="bg-[#f7f7f7] dark:bg-[#0f172a] transition-colors duration-300">
      {/* Header */}
      <header className="max-w-full mx-auto sticky top-0 z-150">
        <nav className="bg-[#012444] dark:bg-black shadow-sm dark:shadow-none">
          <Navbar />
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-full mx-auto min-h-[calc(100vh-350.5px)] bg-[#f7f7f7] dark:bg-[#0f172a] transition-colors duration-300">
        {navigation?.state === "loading" ? <Loading /> : <Outlet />}
      </main>

      {/* Footer */}
      <footer className="bg-[#012444] dark:bg-black max-w-full mx-auto">
        <Footer />
      </footer>

      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};

export default MainLayout;
