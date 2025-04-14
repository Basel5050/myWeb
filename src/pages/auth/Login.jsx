import React, { useContext, useState } from 'react'
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
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import AppContext from '../../context/context';

const Login = () => {
  const{users,setUserData,setIsLogged} = useContext(AppContext)
  const navigate = useNavigate()
  
const [logginData , setLogginData, ] = useState({
  email:"",
  password : 0 
})
const [passwordCheck, setPasswordCheck] =useState(false)
const [emailCheck, setEmailCheck] =useState(false)
//validation
const emailValidation = (e)=>{
setLogginData({...logginData, email:e.target.value   })
if (!e.target.value .includes("@")) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Please enter valid Email!",
    footer: '<a href="#">Why do I have this issue?</a>'
  });
  setEmailCheck(false);
  

}else{setEmailCheck(true)}
}

const passwordValidation = (e)=>{
  setLogginData({...logginData, password:e.target.value   })
  ;
  
  if (e.target.value.length<7) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter valid Password!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
    setPasswordCheck(false)
  } else {setPasswordCheck(true)}
  
}


//login
const loginValidation = (e)=>{
  e.preventDefault()
if(passwordCheck&&emailCheck){
  const myUser = users.find(user => user.email== logginData.email);
  if (myUser?.password == logginData.password) {
    localStorage.setItem("id",myUser.id);
setUserData(myUser)
setIsLogged(true)
    navigate("/")
  }else{Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Invalid Email or Password!",
    footer: '<a href="#">Why do I have this issue?</a>'
  }) }
  console.log(myUser);
}
  
  
  
}
  return (
<form 
 >
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
      <Input label="Email" size="lg" onBlur={(e)=>emailValidation(e)} />
      <Input label="Password" size="lg" onBlur={(e)=>passwordValidation(e)} />
      <div className="-ml-2.5">
        <Checkbox label="Remember Me" />
      </div>
    </CardBody>
    <CardFooter className="pt-0">
      <Typography 
      as={Link}
      to="/">
      <Button onClick={(e)=>loginValidation(e)} variant="gradient" fullWidth   className="mt-4 py-2 text-md font-semibold tracking-wide hover:scale-[1.02] transition"
      >
        Sign In
      </Button>
      </Typography>
      
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