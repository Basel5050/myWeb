import React, { useContext, useState } from 'react'
import AppContext from '../../../context/context';

const MyProduct = ({image,secImage}) => {
   const {products}=useContext(AppContext)
    const [currentImage,setCurrentImage] = useState(image)
    return (
        <img
        src={currentImage}
        alt=""
        className="w-auto transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        onMouseEnter={() => setCurrentImage(secImage)}
        onMouseLeave={() => setCurrentImage(image)}
      />
    )
}

export default MyProduct