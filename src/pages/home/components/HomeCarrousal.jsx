import React from 'react'
import { Carousel, IconButton } from "@material-tailwind/react";

const HomeCarrousal = () => {
  
    return (
      <section className=" w-full relative bg-cover bg-center bg-no-repeat text-white bg-[url('/slider-bg.jpg')]">
        <div className="container mx-auto px-4 py-40 flex flex-col lg:flex-row items-center justify-between min-h-[90vh]:">
          
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Best Jewellery Collection
            </h1>
            <p className="text-gray-300 mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The point
              of using Lorem.
            </p>
            <button className="bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition px-6 py-3 rounded-md font-medium">
              Shop Now
            </button>
          </div>
  
         
          
        </div>
      </section>
    );
}

export default HomeCarrousal