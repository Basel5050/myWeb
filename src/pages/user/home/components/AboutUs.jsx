import React, { useState } from 'react'
import { Button } from "@material-tailwind/react";

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react"
  
const AboutUs = () => {
    const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div className='mt-6 mb-6 flex  flex-wrap justify-evenly'>

        <Accordion open={open === 1}>
            
            
            <AccordionHeader onClick={() => handleOpen(1) }>AboutUs?</AccordionHeader>
            
    
    <AccordionBody >

    LOEV, founded in 2022, is Switzerland's pioneering sustainable diamond jewelry brand. Driven by the passion to fuse bold, contemporary aesthetics with an unprecedented level of transparency, the house seeks to revolutionize the fine jewelry industry. LOEV’s unique creative approach skillfully blends art and technology, setting the brand apart from its competitors.

Fully committed to ethical production, LOEV is meticulous in selecting materials and partners, using only lab-grown diamonds and precious gems created from renewable energy, as well as recycled precious metals.
      <img src="/about-img.jpg" alt="about us" className='w-3/4 p-3 m-3 ' />
      <Button color="orange" className=' flex justify-center justify-items-center align-middle'>Read more</Button>
    </AccordionBody>
    
  </Accordion>

  </div>
   
  )
}

export default AboutUs