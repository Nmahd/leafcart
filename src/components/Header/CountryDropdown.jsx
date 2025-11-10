import React from 'react'
import Button from '@mui/material/Button'
import { FaAngleDown } from "react-icons/fa6";

const CountryDropdown = () => {
  return (
    <>

       <Button className='countryDrop w-[150px] h-[80px] min-w-[<150px>]'  >
                         
                            <div className='info flex flex-col'>
                              <span className='label text-black text-xs'>Your Location</span>
                              <span className='info'>Pakistan</span>
                                
                            </div>
                            <span className='ml-auto'><FaAngleDown/></span>

                        
                        </Button>
    </>
  )
}

export default CountryDropdown
