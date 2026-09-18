import { Outlet } from "react-router";
import NavbarComp from "../components/NavbarComp";
import FooterComp from "../components/FooterComp";

const MainLayout = () => {
  return (
    <main className="">
      <NavbarComp />
      <Outlet />
      <FooterComp />
    </main>
  );
};

export default MainLayout;
