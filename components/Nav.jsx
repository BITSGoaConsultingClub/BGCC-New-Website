import React from "react";
import imgLinks from "@/utils/images";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  Image,
  NavbarMenuItem,
} from "@nextui-org/react";

export default function Nav() {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar isBordered className=" bg-[#1C1C1C] font-poppins  text-white">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <Image width={200} alt="BGCC Logo Image" src={imgLinks.bgccLogo} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Image
            width={150}
            alt="BGCC Logo Image"
            src="https://i.imgur.com/I4dsioZ.png"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="flex flex-row  mr-0" justify="end">
        <NavbarItem className="hidden lg:flex">
          <a href="https://forms.gle/D4cGknrmr4ngsShm6">
            <Button className="color-bgcc-yellow text-black">
              Partner with Us
            </Button>
          </a>
        </NavbarItem>

        <NavbarItem>
          <Link className="text-white mx-2 hidden lg:flex" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white mx-2 hidden lg:flex" href="/testimonials">
            Testimonials
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white mx-2 hidden lg:flex" href="/events">
            Events
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white mx-2 hidden lg:flex" href="/services">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white mx-2 hidden lg:flex" href="/clients">
            Clients
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-[#343434] bg-opacity-[50%] text-white flex flex-col gap-3">
        <NavbarMenuItem>
          <a
            href="https://forms.gle/D4cGknrmr4ngsShm6"
            className="text-white text-2xl font-semibold font-poppins"
          >
            Partner with Us
          </a>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/"
            className="text-white text-2xl font-semibold font-poppins"
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="text-white text-2xl font-semibold font-poppins"
            href="/testimonials"
          >
            Testimonials
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="text-white text-2xl font-semibold font-poppins"
            href="/events"
          >
            Events
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="text-white text-2xl font-semibold font-poppins"
            href="/services"
          >
            Services
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="text-white text-2xl font-semibold font-poppins"
            href="/clients"
          >
            Clients
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
