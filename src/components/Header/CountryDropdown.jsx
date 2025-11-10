import React from 'react'
import Button from '@mui/material/Button'
import { FaAngleDown } from "react-icons/fa6";

const CountryDropdown = () => {
  return (
    <>

       <Button className='countryDrop w-[150px] h-[60px] min-w-[<150px>] text-left justify-start'  >
                         
                            <div className='info flex flex-col'>
                              <span className='label text-black text-xs capitalize leading-[16px]'>Your Location</span>
                              <span className='info font-bold capitalize leading-[16px]'>Pakistan</span>
                                
                            </div>
                            <span className='ml-auto'><FaAngleDown/></span>

                        
                        </Button>
    </>
  )
}

export default CountryDropdown
