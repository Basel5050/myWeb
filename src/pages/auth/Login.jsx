import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom'

const Login = () => {
const [logginData , setLogginData] = useState({
  email:"",
  password : 0 
})

const emailValidation = (e)=>{
setLogginData({...logginData, email:e   })
;
return logginData.includes("@")
}
const passwordValidation = (e)=>{
  setLogginData({...logginData, password:e   })
  console.log(logginData)
}
  return (
<form >
   <div className='flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-white'>
       <Card className="w-full max-w-sm shadow-lg rounded-xl">
    <CardHeader
      variant="gradient"
      color="gray"
      className="mb-4 grid h-28 place-items-center"
    >
      <Typography variant="h4" color="white" className="text-center font-semibold">
        Sign In
      </Typography>
    </CardHeader>
    <CardBody className="flex flex-col gap-4 px-4 py-4">
      <Input label="Email" size="lg" onChange={(e)=>emailValidation(e.target.value)} />
      <Input label="Password" size="lg" onChange={(e)=>passwordValidation(e.target.value)} />
      <div className="-ml-2.5">
        <Checkbox label="Remember Me" />
      </div>
    </CardBody>
    <CardFooter className="pt-0">
      <Button variant="gradient" fullWidth   className="mt-4 py-2 text-md font-semibold tracking-wide hover:scale-[1.02] transition"
      >
        Sign In
      </Button>
      <Typography variant="small" className="mt-6 text-center">
        Don&apos;t have an account?
        <Typography
          as={Link}
          to="/signup"
          variant="small"
          color="blue-gray"
          className="ml-1 font-bold text-blue-500 hover:underline"
        >
          Sign up
        </Typography>
      </Typography>
    </CardFooter>
  </Card>
  </div>
  </form>
   
  )
}

export default Login