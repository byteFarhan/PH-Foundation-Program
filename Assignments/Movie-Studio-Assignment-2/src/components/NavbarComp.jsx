import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function NavbarComp() {
  return (
    <Navbar fluid className="dark:bg-gray-900">
      <NavbarBrand href="#">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-blue-500 dark:text-white">
          Movie Studio
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button className="">All Movies</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
