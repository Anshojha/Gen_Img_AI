import React  from 'react'
import { assets } from "../assets/assets.js"
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'

const Navbar = () => {

  const {user} = React.useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between p-4'>
      <Link to='/'>
        <img src={assets.logo} alt="" srcSet="" className='w-28 sm:w-32 lg:w-40' />
      </Link>
      <div className=''>
        {user ?
          <div className='flex items-center gap-4 sm:gap-3'>
            <button onClick={() => navigate("/buy")} className='flex items-center gap-2 bg-blue-100 px-4 py-1.5 sm:px-6 sm:py-3 rounded-full hover:scale-150 transition-all duration-700'>
              <img className='w-5' src={assets.credit_star} alt="" srcSet="" />
              <p className='text-xs  sm:text-sm font-medium text-gray-600'>Credit left : 50</p>
            </button>
            <p className='font-medium text-gray-600 max-sm:hidden pl-4 '>Hlo, Trishika</p>
            <div className='relative group'>
              <img src={assets.profile_icon} alt=""  className='w-10 drop-shadow'/>
              <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black  rounded pt-12'>
                  <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                    <li className='py-1 px-1 cursor-pointer pr-10'>Logout</li>
                  </ul>
              </div>
            </div>
          </div> :
          <div className='flex items-center justify-between gap-2 sm:gap-4'>
            <p onClick={() => navigate("/buy")} className='cursor-pointer'>Pricing</p>
            <button  className='bg-zinc-800 text-white px-7 py-2 sm:py-2 rounded-full'>Login</button>
          </div>
        }


      </div>
    </div>
  )
}

export default Navbar
