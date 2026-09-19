import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link, useNavigate } from "react-router";
import logo from "../assets/logo.svg";

export default function NavbarComp() {
  const navigate = useNavigate();
  return (
    <Navbar fluid className="dark:bg-gray-900">
      <Link to={"/"}>
        <div className="flex">
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-blue-500 dark:text-white">
            Movie Studio
          </span>
        </div>
      </Link>
      <div className="flex md:order-2">
        <Button
          onClick={() => navigate("/all-movies")}
          className="cursor-pointer"
        >
          Movies
        </Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <Link className="text-white" to={"/"} active>
          Home
        </Link>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
