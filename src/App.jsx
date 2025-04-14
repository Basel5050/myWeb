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
const [users,setUsers] = useState([])
  const [products , setProducts] = useState([])
  const [userData,setUserData] = useState({})
  const [isLogged,setIsLogged] = useState(false)
  
useEffect(()=>{
  axios({
    method: 'GET',
    url: "http://localhost:3000/users"
  }).then((res) => {
    setUsers(res.data)

  }).catch((error) => {
    console.error("Error fetching data:", error);}),

  axios({
    method: 'GET',
    url: "http://localhost:3000/products"
  }).then((res) => {
    setProducts(res.data)

  }).catch((error) => {
    console.error("Error fetching data:", error);})
},[])



  return (

    <AppContext.Provider value={{products,users,userData,setUserData,setIsLogged,isLogged}}>
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
