import React, { useContext, useEffect, useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import MyProduct from './MyProduct';
import axios from 'axios';
import AppContext from '../../../../context/context';
   
  function CheckIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-3 w-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    );
  }
const MyCards = () => {
  const {products,productId,setProductID,setUserData,userData}= useContext(AppContext)
  const addToCart = (id)=>{
    const productAddedCheck = !userData.cart.some(product => product.id == id)
    const increaseQuantity = userData.cart.map(product => {
      if (product.id == id) {
        return { ...product, q: product.q + 1 };
      }
      return product;
    })
    console.log(increaseQuantity);
    
    if(productAddedCheck){
      setUserData({...userData,cart:[...userData.cart,productId]})
    }    else {
      setUserData({...userData,cart:increaseQuantity})

    }
    
  }
  
  useEffect(()=>{
    console.log(productId);
    
  },[productId])
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
    {products.map((myproduct)=>
    { 
      return(
      
      <Card
      
        key={myproduct.id}
        variant="gradient"
        className="w-[280px] bg-brown-300 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 p-4 pb-2 text-center border-b border-white/10"
        >
          <Typography
            variant="small"
            color="white"
            className="font-medium uppercase"
          >
            {myproduct.description}
          </Typography>
          <Typography
            variant="h2"
            color="white"
            className="mt-4 text-2xl font-semibold"
          >
            ${myproduct.price}
          </Typography>
        </CardHeader>

        <div className="p-4 flex justify-center">
          <MyProduct image={myproduct.image} secImage={myproduct.secImage} />
        </div>

        <CardFooter className="px-4 pb-4 mt-auto">
          <Button 
            size="lg"
            color="white"
            className="w-full hover:scale-[1.02] focus:scale-[1.02] active:scale-100 transition-transform"
            ripple={false}
            onMouseDown={()=>setProductID({...myproduct, q:+1})}
            onMouseUp={()=>addToCart(myproduct.id)}
          >
            Buy Now
          </Button>
        </CardFooter>
      </Card>
    )} )}
  </div>
   ) 
  
  
}

export default MyCards