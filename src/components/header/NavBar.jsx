import React, { useContext } from 'react'
import GeneralNavBar from './GeneralNavBar'
import LoggedNavBar from './LoggedNavBar'
import AppContext from '../../context/context';

const NavBar = () => {
  const {isLogged}= useContext(AppContext)
  return (
    <div>
      {isLogged?<LoggedNavBar/>:<GeneralNavBar/>}
      
    </div>
  )
}

export default NavBar