import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Login = () => {
  const [state, setstate] = useState('Login')
  const {setShowLogin} = useContext(AppContext)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className='bg-black/30 flex items-center justify-center top-0 left-0 right-0 bottom-0 absolute z-10 backdrop-blur-sm'>
      <form className='relative bg-white p-10 rounded-xl text-slate-500' action="">
        <h1 className='text-2xl font-medium text-center text-neutral-700'>{state}</h1>
        <p className='text-sm'>Welcome back! Please sign in to continue         </p>
        {state !== 'Login' &&<div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img src={assets.email_icon} alt="" />
            <input className='outline-none text-sm' type="text" placeholder='Full name'  required/>
        </div>}
        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
            <img src={assets.email_icon} alt="" />
            <input className='outline-none text-sm' type="email" placeholder='Email id'  required/>
        </div>
        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
            <img src={assets.lock_icon} alt="" />
            <input className='outline-none text-sm' type="password" placeholder='Password'  required/>
        </div>
        <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forget password?</p>
        <button className='rounded-full  py-2  text-white bg-blue-600 w-full '>{state === 'Login' ? 'Login' : 'Sign up'}</button>

        {state === 'Login' && <p className='text-sm text-gray-500 text-center mt-5'> Don't have an account? <span onClick={()=>setstate('Sign Up')} className='text-blue-600 cursor-pointer underline'>Sign up</span></p>}
       {state === 'Sign Up' &&  <p className='text-sm text-gray-500 text-center mt-5'> Already have an account? <span onClick={()=>setstate('Login')} className='text-blue-600 cursor-pointer underline'>Login</span></p>}
        <img onClick={()=>setShowLogin(false)}  src={assets.cross_icon} className='absolute top-5 right-5 cursor-pointer' alt="" />
      </form>
    </div>
  )
}

export default Login
