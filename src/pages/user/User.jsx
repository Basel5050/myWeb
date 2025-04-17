import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import MyItems from './myItems/MyItems'
import Cart from './cart/Cart'
import NavBar from '../../components/header/NavBar'
import Footer from '../../components/footer/Footer'

const User = () => {
  return (
    <div className=' w-full '>
    <NavBar /> 
    <Routes>
      
    <Route index element={<Home/>}/>
      <Route path='products' element={<MyItems/>}/>
      <Route path='login' element={<Login />}/>
      <Route path='signup' element={<SignUp />}/>
      <Route path='cart' element={<Cart/>}/>
    </Routes>
    <Footer />
    </div>
  )
}

export default User