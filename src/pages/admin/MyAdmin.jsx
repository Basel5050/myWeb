import React, { useContext } from 'react'
import AdminNavBar from './component/navbar/AdminNavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import AppContext from '../../context/context'
import Login from '../user/auth/Login'
import UserData from './userData/UserData'
import Products from './products/Products'
import ViewProduct from './products/viewProduct/ViewProduct'

const MyAdmin = () => {
  const {userData}= useContext(AppContext)
  return (
    <div>
        <AdminNavBar/>
        <Routes>
        <Route index element={ <Home/>  }/>
        <Route path='users' element={ <UserData/>  }/>
        <Route path='products' element={ <Products/>  }/>
        <Route path='products/:id' element={ <ViewProduct/> }/>
        </Routes>
    </div>
  )
}

export default MyAdmin