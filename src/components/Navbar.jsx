import React from 'react'
import logo from '../assets/images/leafcart-logo-hr.png'
import { Link } from 'react-router'
import Button from '@mui/material/Button'

const Navbar = () => {
  return (
    <>
        <div className="header-wrapper"  >  
            <div className="top-strip bg-[#15af4b] p-3 text-white ">
                <div className="container">
                    <p className="mb-0 mt-0 text-center"  >Shipments may be late around <b> 2-4 working days</b></p>

                </div>

            </div>

          <div className='header h-auto w-full pb-4 pt-4 ' >
            <div className='container'>
              <div>
                <div className='row'>
                  <div className='logo-wrapper sm:w-1/4 flex-row col-[<2>] items-center '>
                      <Link to={'/'}> <img className='w-full'  src={logo} alt='logo'/> </Link>  
                  </div>

                    <div className=' flex col-[<10>] items-center '>
                        <Button className='w-[150px] h-[80px]  min-w-[<150px>]'  >Your Location</Button>
                    </div>

                </div>
              </div>

            </div>

          </div>


        </div>    

    </>
  )
}

export default Navbar
