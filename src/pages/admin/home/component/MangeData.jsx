import React from 'react'
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaUsers, FaBoxOpen } from "react-icons/fa";

const MangeData = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-6">

      {/* USERS */}
      <Card className="bg-gradient-to-tr from-[#f3e8e2] to-[#fef9f5] shadow-lg rounded-3xl border border-[#e7d6c9] hover:scale-[1.01] transition-transform duration-300">
        <CardBody className="p-8 flex flex-col justify-between h-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#8b5e3c] text-white p-4 rounded-2xl shadow">
              <FaUsers className="text-2xl" />
            </div>
            <Typography variant="h4" className="text-[#3e2f2f] font-bold text-2xl">
              Users
            </Typography>
          </div>
          <Typography className="text-[#6e5543] mb-6 text-lg">
            Manage all users, control access, and view activity.
          </Typography>
          <Link to="/admin/users">
            <Button size="lg" className="bg-[#8b5e3c] hover:bg-[#744a2e] text-white rounded-xl px-6">
              Manage
            </Button>
          </Link>
        </CardBody>
      </Card>

      {/* PRODUCTS */}
      <Card className="bg-gradient-to-tr from-[#fff6ee] to-[#f9f4f0] shadow-lg rounded-3xl border border-[#e7d6c9] hover:scale-[1.01] transition-transform duration-300">
        <CardBody className="p-8 flex flex-col justify-between h-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#8b5e3c] text-white p-4 rounded-2xl shadow">
              <FaBoxOpen className="text-2xl" />
            </div>
            <Typography variant="h4" className="text-[#3e2f2f] font-bold text-2xl">
              Products
            </Typography>
          </div>
          <Typography className="text-[#6e5543] mb-6 text-lg">
            Add, edit or remove products and monitor inventory.
          </Typography>
          <Link to="/admin/products">
            <Button size="lg" className="bg-[#8b5e3c] hover:bg-[#744a2e] text-white rounded-xl px-6">
              Manage
            </Button>
          </Link>
        </CardBody>
      </Card>

    </div>
  )
}

export default MangeData