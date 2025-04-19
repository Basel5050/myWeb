import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {
    Card,
    CardBody,
    Input,
    Button,
    Typography,
    Textarea,
  } from "@material-tailwind/react";
  import { FaEdit } from "react-icons/fa";
  import { useNavigate } from "react-router-dom";
import AppContext from '../../../../context/context';

const ViewProduct = () => {
  const {seteditproduct,editProduct}= useContext(AppContext)
  const navigate = useNavigate()
    
    const {id} = useParams()
const [myProduct,setMyProduct] = useState({})




const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    quantity: "",
    image: "",
  });


  const handleChange = (e) => {
    setMyProduct({ ...myProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
        method:'PATCH',
        url: `https://rain-flawless-tamarind.glitch.me/products/${id}`,
        data: myProduct
    }).then(res => {
      if(res.status == 200){
        seteditproduct(!editProduct)
        navigate(-1)

      }
    })
  };




useEffect(()=>{
    axios({
        method: 'GET',
        url:`http://localhost:3000/products/${id}`
    }).then((res) => {
        setMyProduct(res.data)})
},[])    
  return (
    <div className="p-6 max-w-4xl mx-auto">
    <Typography variant="h4" className="mb-6 text-[#3e2f2f] font-bold">
      Edit Product
    </Typography>

    <Card className="rounded-3xl shadow-lg bg-[#fffaf7] border border-[#e7d6c9]">
      <CardBody className="p-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="description"
            name="description"
            value={myProduct.description}
            onChange={handleChange}
            className="bg-white"
          />
          <Input
            label="Price"
            name="price"
            value={myProduct.price}
            onChange={handleChange}
            className="bg-white"
            type="number"
          />
          <Input
            label="Image URL"
            name="image"
            value={myProduct.image}
            onChange={handleChange}
            className="col-span-1 md:col-span-2 bg-white"
          />
          
          <Input
            label="Image URL"
            name="secImage"
            value={myProduct.secImage}
            onChange={handleChange}
            className="col-span-1 md:col-span-2 bg-white"
          />


          <div className="col-span-1 md:col-span-2 flex justify-end">
            <Button
              type="submit"
              className="bg-[#8b5e3c] hover:bg-[#744a2e] text-white px-6 py-2 rounded-xl flex items-center gap-2"
            >
              <FaEdit /> Update Product
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  </div>  )
}

export default ViewProduct