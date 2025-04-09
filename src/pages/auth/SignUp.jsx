import React, { useState } from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
const SignUp = () => {
  const [user,setUser] = useState({
    name:"",
    email:"" ,
    password: ""
  })
  return (
    <div className='flex     mt-4 mb-4 max-h-fit justify-center float-start w-full items-center'>
      <Card className='flex items-center max-w-screen-lg  w-96 shadow-xl  ' color="transparent" shadow={false}>
    <Typography variant="h4" color="white">
      Sign Up
    </Typography>
    <Typography color="white" className="mt-1 font-normal">
      Nice to meet you! Enter your details to register.
    </Typography>
    <form className=" w-full items-center justify-center  mt-8 mb-2  max-w-screen-lg sm:w-96">
      <div className="mb-1 flex flex-col gap-6">
        <Typography variant="h6" color="white" className="-mb-3">
          Your Name
        </Typography>
        <Input
        onChange={(e) => setUser(e.target.value)}
        value={user.name}
          size="lg"
          placeholder="name@mail.com"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="white" className="-mb-3">
          Your Email
        </Typography>
        <Input
        onChange={(e) => setUser(e.target.value)}
        value={user.email}
          size="lg"
          placeholder="name@mail.com"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="white" className="-mb-3">
          Password
        </Typography>
        <Input
        onChange={(e) => setUser(e.target.value)}
        value={user.password}
          type="password"
          size="lg"
          placeholder="********"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
      </div>
      <Checkbox
        label={
          <Typography
            variant="small"
            color="white"
            className="flex items-center font-normal"
          >
            I agree the
            <a
              href="#"
              className="font-medium transition-colors hover:text-gray-900"
            >
              &nbsp;Terms and Conditions
            </a>
          </Typography>
        }
        containerProps={{ className: "-ml-2.5" }}
      />
      <Button className="mt-6" fullWidth>
        sign up
      </Button>
      <Typography color="gray" className="mt-4 text-center font-normal">
        Already have an account?{" "}
        <a href="#" className="font-medium text-gray-900">
          Sign In
        </a>
      </Typography>
    </form>
  </Card>
  </div>
  )
}

export default SignUp