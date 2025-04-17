import React, { useContext, useEffect, useState } from 'react'
import {
  Card,
  CardBody,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react"
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate,Link } from 'react-router-dom'
import AppContext from '../../../context/context'

const SignUp = () => {
  const {setIsLogged,setUserData} = useContext(AppContext)
  const [user,setUser] = useState({
    name:"",
    email:"" ,
    password: "",
    role: "user",
    cart:[]
  })
  const navigate = useNavigate()
// const NameValidation = (e)=>{
// setUser(...user ,myName:e.target.val )
// }
const sendUserData = (e) =>{
  e.preventDefault();
  if (user.name.length>3&&user.email.includes("@")&&user.password.length>6) {
    axios({
      method: 'POST',
      url: "http://localhost:3000/users",
      data: user
    }
  
    )
    axios({
      method: 'GET',
      url: "http://localhost:3000/users"
    }).then((res) => {
      const myUser = res.data.find(z => z.email== user.email)
      localStorage.setItem("id",myUser.id)
      setIsLogged(true)
      setUserData(user)
      navigate("/")
  
    })
    
    // 
    
  } else{
     Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter valid Information!",
        footer: '<a href="#">Why do I have this issue?</a>'
      })
  }
   
}

  useEffect(()=>{console.log(user);
  },[user])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 to-white p-4">
    <Card className="w-full max-w-md shadow-2xl rounded-2xl px-6 py-8">
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="text-center mb-6">
          Create an Account
        </Typography>

        <form className="flex flex-col gap-6">
          <Input 
          onBlur={(e) => setUser({...user,name:e.target.value})}
        
         label="Name" 
         size="lg" 
         required />
          <Input 
          onBlur={(e) => setUser({...user,email:e.target.value})}
          
          label="Email" 
          type="email" 
          size="lg" 
          required />
          <Input
          onBlur={(e) => setUser({...user,password:e.target.value})}
          
           label="Password" 
          type="password" 
          size="lg" 
          required />

          <Button onClick={(e)=>sendUserData(e)} color="blue" fullWidth className="mt-2">
            Sign Up
          </Button>
        </form>

        <Typography
          variant="small"
          color="gray"
          className="text-center mt-6"
        >
          Already have an account?{" "}
          
            <Typography 
            as={Link}
            to="/login"
            variant="small"
            className="text-blue-600 hover:underline transition duration-200"

            >

            Sign In
            </Typography>
            
          
        </Typography>
      </CardBody>
    </Card>
  </div>
  )
}

export default SignUp