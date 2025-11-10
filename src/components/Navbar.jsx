import React from 'react'
import logo from '../assets/images/leafcart-logo-hr.png'
import { Link } from 'react-router'
import CountryDropdown from './Header/CountryDropdown.jsx'



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
          
                <div className='row flex'>
                  <div className='logo-wrapper flex col-[<2>] items-center pt-2 pl-10'>
                      <Link to={'/'}> <img className='w-60'  src={logo} alt='logo'/> </Link>  
                  </div>

                    <div className=' flex col-[<10>] items-center part 2 '>

                      <CountryDropdown/>
                     
                    </div>

                </div>
            

            </div>

          </div>


        </div>    

    </>
  )
}

export default Navbar
