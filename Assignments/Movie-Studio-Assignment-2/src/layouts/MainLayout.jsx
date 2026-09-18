import { Outlet } from "react-router";
import NavbarComp from "../components/NavbarComp";
import FooterComp from "../components/FooterComp";

const MainLayout = () => {
  return (
    <>
      <NavbarComp />
      <Outlet />
      <FooterComp />
    </>
  );
};

export default MainLayout;
