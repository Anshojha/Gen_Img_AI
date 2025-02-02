import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 p-6 mt-20'>
      <img src={assets.logo} alt="" srcset="" />
      <p  className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>All right reserved. | Copyright @imagify</p>
      <div className='flex gap-1.5'>
        <img src={assets.facebook_icon} width={35} alt="" />
        <img src={assets.twitter_icon} width={35} alt="" />
        <img src={assets.instagram_icon} width={35}  alt="" />
      </div>
    </div>
  )
}

export default Footer
