import React from 'react'
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom'
import MyCards from './components/MyCards'
import {
 
  Typography,
  
} from "@material-tailwind/react"
const MyItems = () => {
  return (
    <div className='mt-6 mb-6 flex  flex-wrap justify-evenly'>
      <MyCards /> 
      
        <Typography 
        as={Link}
        to = '/products'
        variant="small"
        color="blue-gray"
        className="p-1 font-medium">
        <Button className="bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition px-6 py-3 rounded-md font-medium"   size='lg'>Shop now</Button>
        </Typography>
      
      
      
      
    </div>
  )
}

export default MyItems