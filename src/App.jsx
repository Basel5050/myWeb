import { useEffect, useState } from 'react'
import NavBar from './components/header/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import MyItems from './pages/myItems/MyItems'
import Footer from './components/footer/Footer'
import axios from 'axios'
import AppContext from './context/context'

function App() {
  const [products , setProducts] = useState([])
  
useEffect(()=>{
  axios({
    method: 'GET',
    url: "http://localhost:3000/products"
  }).then((res) => {
    setProducts(res.data)

  }).catch((error) => {
    console.error("Error fetching data:", error);})
},[])
console.log(products);


  return (

    <AppContext.Provider value={{products}}>
 <div className=' w-full '>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/products' element={<MyItems/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<SignUp />}/>
    </Routes>
    <Footer />
    </div>
    </AppContext.Provider>
   
  )
}

export default App
