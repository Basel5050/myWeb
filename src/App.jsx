import { useEffect, useState } from 'react'
import NavBar from './components/header/NavBar'
import { Route, Routes } from 'react-router-dom'

import Footer from './components/footer/Footer'
import axios from 'axios'
import AppContext from './context/context'
import MyAdmin from './pages/admin/MyAdmin'
import User from './pages/user/User'
import Login from './pages/user/auth/Login'

function App() {
const [users,setUsers] = useState([])
  const [products , setProducts] = useState([])
  const [userData,setUserData] = useState({})
  const [isLogged,setIsLogged] = useState(false)
  const [productId,setProductID] = useState(0)
  // if (localStorage.id) {
  //   setIsLogged(true)
  // }
useEffect(()=>{
  if(localStorage.id){
    setIsLogged(true)
    axios({
      method: 'GET',
      url: `http://localhost:3000/users/${localStorage.id}`
    }).then((res) => {
      setUserData(res.data)
  
    }).catch((error) => {
      console.error("Error fetching data:", error);})
      }else{
        axios({
          method: 'GET',
          url: "http://localhost:3000/users"
        }).then((res) => {
          setUsers(res.data)
      
        }).catch((error) => {
          console.error("Error fetching data:", error);})

      }
  

  axios({
    method: 'GET',
    url: "http://localhost:3000/products"
  }).then((res) => {
    setProducts(res.data)

  }).catch((error) => {
    console.error("Error fetching data:", error);})
    
},[])
// useEffect(()=>{
// if(isLogged){
// axios({
//   method: "PUT",
//   url: `http://localhost:3000/users/${localStorage.id}`,
//   data: userData
// })}
// console.log(userData);

// },[isLogged])


  return (

    <AppContext.Provider value={{products,users,userData,setUserData,setIsLogged,isLogged,productId,setProductID}}>
 <div className=' w-full '>
    
    <Routes>
    <Route path='/*' element={<User/>}/>
      <Route path='/admin/*' element={userData.role == "admin" && <MyAdmin/>}/>
    </Routes>
    
    </div>
    </AppContext.Provider>
   
  )
}

export default App
