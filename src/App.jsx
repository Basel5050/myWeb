import { useState } from 'react'
import NavBar from './components/header/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import MyItems from './pages/myItems/MyItems'
import Footer from './components/footer/Footer'

function App() {
  

  return (
    <div className='bg-brown-800  w-full '>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/products' element={<MyItems/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<SignUp />}/>
    </Routes>
    <Footer />
    </div>
  )
}

export default App
