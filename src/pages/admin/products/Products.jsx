import React, { useContext } from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import AppContext from "../../../context/context";



const Products = () => {
    const {products} = useContext(AppContext)
    const handleEdit = (id) => {
        console.log("Edit product:", id);
      };
    
      const handleDelete = (id) => {
        console.log("Delete product:", id);
      };
    
      return (
        <div className="p-6">
          <Typography variant="h4" className="mb-6 text-[#3e2f2f] font-bold">
            Products List
          </Typography>
    
          <Card className="overflow-x-auto rounded-3xl shadow-lg border border-[#e7d6c9] bg-[#fffaf7]">
            <CardBody className="p-6">
              <table className="w-full min-w-[700px] table-auto text-left">
                <thead>
                  <tr className="bg-[#f3e8e2] text-[#3e2f2f]">
                    <th className="p-4 font-semibold">#</th>
                    <th className="p-4 font-semibold">Image</th>
                    <th className="p-4 font-semibold">Name</th>
                    <th className="p-4 font-semibold">Price</th>
                    
                    <th className="p-4 font-semibold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, i) => (
                    <tr
                      key={product.id}
                      className="border-b border-[#e7d6c9] hover:bg-[#fef9f5]"
                    >
                      <td className="p-4">{i + 1}</td>
                      <td className="p-4">
                        <img
                          src={product.image}
                          alt={product.description}
                          className="w-14 h-14 object-cover rounded-lg"
                        />
                      </td>
                      <td className="p-4">{product.description}</td>
                      <td className="p-4">{product.price}</td>
                     
                      <td className="p-4 flex justify-center gap-3">
                        <Button
                          size="sm"
                          className="bg-[#8b5e3c] hover:bg-[#744a2e] text-white px-4 py-1 rounded"
                          onClick={() => handleEdit(product.id)}
                        >
                          <FaEdit />
                        </Button>
                        <Button
                          size="sm"
                          className="bg-red-500 hover:bg-red-700 text-white px-4 py-1 rounded"
                          onClick={() => handleDelete(product.id)}
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

export default Products