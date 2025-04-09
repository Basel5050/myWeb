import React from 'react'

import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
  } from "@material-tailwind/react";

  import { MdNavigation } from "react-icons/md";
  import { MdCoronavirus } from "react-icons/md";
import { Link } from 'react-router-dom';


 const NavList = ()=>{
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as={Link}
        to='/'
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        home
      </Typography>
      <Typography
        as={Link}
        to = '/products'
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        Products
      </Typography>
      <Typography
        as={Link}
        to ='/login'
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        Sgin in
      </Typography>
      <Typography
        as={Link}
        to ='/signup'
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        Sign up
      </Typography>
    </ul>
    )
 } 
const NavBar = () => {
    const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    
    <div>
<Navbar className="mx-auto max-w-screen-2xl px-6 py-3 bg-deep-orange-800">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
         as={Link}
        to='/'
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Jumia
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <MdNavigation className="h-6 w-6" strokeWidth={2} />
          ) : (
            <MdCoronavirus className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
    </div>
        
    
  )
}

export default NavBar