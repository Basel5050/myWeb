import React, { useContext, useEffect } from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import AppContext from "../../../context/context";
import axios from "axios";



const UserData = () => {
    const {users,setUsers}=useContext(AppContext)




    useEffect(()=>{
        axios({
            method: 'GET',
            url: "https://rain-flawless-tamarind.glitch.me/users"
          }).then((res) => {
            setUsers(res.data)})
    },[])
    const handleEdit = (id) => {
        console.log("Edit user:", id);
      };
    
      const handleDelete = (id) => {
        const myNewUsers = users.filter(user => user.id !== id)
        setUsers(myNewUsers)
        axios({
            method: "delete",
            url : `https://rain-flawless-tamarind.glitch.me/users/${id}`
        })
        
      };
    
      return (
        <div className="p-6">
          <Typography variant="h4" className="mb-6 text-[#3e2f2f] font-bold">
            Users List
          </Typography>
    
          <Card className="overflow-x-auto rounded-3xl shadow-lg border border-[#e7d6c9] bg-[#fffaf7]">
            <CardBody className="p-6">
              <table className="w-full min-w-[600px] table-auto text-left">
                <thead>
                  <tr className="bg-[#f3e8e2] text-[#3e2f2f]">
                    <th className="p-4 font-semibold">#</th>
                    <th className="p-4 font-semibold">Name</th>
                    <th className="p-4 font-semibold">Email</th>
                    <th className="p-4 font-semibold">Role</th>
                    <th className="p-4 font-semibold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, i) => (
                    <tr
                      key={user.id}
                      className={`border-b border-[#e7d6c9] hover:bg-[#fef9f5]`}
                    >
                      <td className="p-4">{i + 1}</td>
                      <td className="p-4">{user.name}</td>
                      <td className="p-4">{user.email}</td>
                      <td className="p-4">{user.role}</td>
                      <td className="p-4 flex justify-center gap-3">
                        <Button
                          size="sm"
                          className="bg-[#8b5e3c] hover:bg-[#744a2e] text-white px-4 py-1 rounded"
                          onClick={() => handleEdit(user.id)}
                        >
                          <FaEdit />
                        </Button>
                        <Button
                          size="sm"
                          className="bg-red-500 hover:bg-red-700 text-white px-4 py-1 rounded"
                          onClick={() => handleDelete(user.id)}
                        >
                          <FaTrash />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </div>
      );

}

export default UserData