import React from 'react'
import MyCards from './components/MyCards'

const MyItems = () => {
  return (
    <div className=' bg-brown-800 mt-6 mb-6 flex  flex-wrap justify-evenly'>
      <MyCards /> 
      <MyCards />
      <MyCards />
      <MyCards />
    </div>
  )
}

export default MyItems