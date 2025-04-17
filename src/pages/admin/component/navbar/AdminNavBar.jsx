
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUsers,
  FiBox,
  FiLogOut,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const AdminNavBar = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const navigate = useNavigate();
  
    const handleLogout = () => {
      // احذف بيانات المستخدم وسجّل الخروج
      localStorage.clear();
      navigate("/");
    };
  
    React.useEffect(() => {
      window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);
  
    const navList = (
      <ul className="mt-2 mb-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li>
          <Link to="/admin" className="flex items-center gap-2 text-[#3e2f2f] hover:text-[#8b5e3c] transition">
            <FiHome className="h-5 w-5" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/users" className="flex items-center gap-2 text-[#3e2f2f] hover:text-[#8b5e3c] transition">
            <FiUsers className="h-5 w-5" />
            <span>Users</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/products" className="flex items-center gap-2 text-[#3e2f2f] hover:text-[#8b5e3c] transition">
            <FiBox className="h-5 w-5" />
            <span>Products</span>
          </Link>
        </li>
      </ul>
    );
  
    return (
      <Navbar className="mx-auto max-w-full px-4 py-2 lg:px-8 lg:py-4 shadow-md rounded-none bg-[#fff6ee] border-b border-[#d2bba3]">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography className="mr-4 cursor-pointer py-1.5 font-bold text-xl text-[#8b5e3c]">
            Admin Dashboard
          </Typography>
  
          <div className="hidden lg:flex items-center justify-between w-full">
            {navList}
  
            <Button
              onClick={handleLogout}
              variant="text"
              className="flex items-center gap-2 text-red-500 hover:text-red-700"
            >
              <FiLogOut className="h-5 w-5" />
              Log out
            </Button>
          </div>
  
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </IconButton>
        </div>
  
        <Collapse open={openNav}>
          <div className="flex flex-col gap-4">
            {navList}
            <Button
              onClick={handleLogout}
              variant="text"
              className="flex items-center gap-2 text-red-500 hover:text-red-700"
            >
              <FiLogOut className="h-5 w-5" />
              Log out
            </Button>
          </div>
        </Collapse>
      </Navbar>
    );
}

export default AdminNavBar