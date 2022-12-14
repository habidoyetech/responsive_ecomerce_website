import React from 'react'
import Logo from '../../assets/logo.png'
import { Links } from '../../data'

const Header = () => {
  return (
    <div className='flex p-6 box-border'>
      <div className='flex flex-auto items-center gap-4 cursor-pointer'>
        <img src={Logo} alt='Company Logo' className='w-10 h-10' />
        <span className='font-semibold'>Amazon</span>
      </div>
      <div className='flex items-center justify-center gap-8'>
        <div className='flex gap-8 font-semibold'>
            <ul className='flex gap-8 font-semibold'>
              {Links.map((link, index) => {
                return (
                  <li className='hover:text-blue-400 cursor-pointer' key={index}>{link.name}</li>
                )
              })}
            </ul>
        </div> 
        <input type="text" className='w-40 outline-none border-none rounded-md p-1 h-3/9' placeholder='Search'/>
        <span >
          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </span>
      </div>
      
    </div>
  )
}

export default Header
