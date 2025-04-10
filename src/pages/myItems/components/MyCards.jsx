import React, { useContext } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import AppContext from '../../../context/context';
   
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
  const {products}= useContext(AppContext)
  return (
    <div className='mt-6 mb-6 flex  flex-wrap justify-evenly p-2 m-2'>
      {products.map(({id,image,description,price},index)=>(

<Card key={index}  variant="gradient" className="w-full max-w-[20rem] p-8 bg-brown-300 mt-4 ">
<CardHeader
  floated={false}
  shadow={false}
  color="transparent"
  className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
>
  <Typography
    variant="small"
    color="white"
    className="font-normal uppercase"
  >
    {description}
  </Typography>
  <Typography
    variant="h1"
    color="white"
    className="mt-6 flex justify-center gap-1 text-3xl font-normal"
  >
    <span className="mt-0 text-3xl">$</span>{price}{" "}
    <span className="self-end text-3xl">/mo</span>
  </Typography>
</CardHeader>
<img src={image} alt="" className='w-auto'/>
<CardFooter className="mt-12 p-0">
  <Button
    size="lg"
    color="white"
    className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
    ripple={false}
    fullWidth={true}
  >
    Buy Now
  </Button>
</CardFooter>
</Card>

      )
    
    )}
    </div>
   ) 
  
  
}

export default MyCards