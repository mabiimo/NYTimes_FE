import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Typography, IconButton, Collapse, MobileNav } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export default function NavigationBar() {
  {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
      window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navList = (
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
          <Link to="/" className="flex items-center">
            News
          </Link>
        </Typography>
        <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
          <Link to="/books" className="flex items-center">
            Books
          </Link>
        </Typography>
        <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
          <Link to="#" className="flex items-center">
            Kosong
          </Link>
        </Typography>
        <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
          <Link to="#" className="flex items-center">
            Kosong
          </Link>
        </Typography>
      </ul>
    );

    return (
      <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Link to="/">
            <Typography as="a" to="#" className="mr-4 cursor-pointer py-1.5 font-medium">
              NY Timess
            </Typography>
          </Link>

          <div className="hidden lg:block">{navList}</div>

          <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" onClick={() => setOpenNav(!openNav)}>
            {openNav ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className="container mx-auto">{navList}</div>
        </Collapse>
      </Navbar>
    );
  }
}
