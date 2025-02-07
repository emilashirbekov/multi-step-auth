import { Footer } from "@/widgets/Footer";
import { Navbar } from "@/widgets/Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};
