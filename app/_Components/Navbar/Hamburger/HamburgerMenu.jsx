'use client'
import React, { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import icon from './../../../../public/Images/Logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false)
    const [display, setdisplay] = useState(true)
    
    function hidePage(params) {
      setOpen(false)
    }
  return (
    <>
<div className='-order-1 lg:order-1'>


    <div onClick={()=>setdisplay(false)} className=' w-full flex justify-end lg:hidden z-[1223213]  relative '>

    <Hamburger toggled={isOpen} toggle={setOpen}  size={20} color='#FFD11A'  />
    </div>
    {
        isOpen? 
        <div className='bg-[#141414] w-[70%]  h-screen absolute top-0 left-0 z-40 flex justify-center items-center slideInLeft flex-col'>
            <ul className="menu menu-vertical px-1 text-xl text-center mt-24">
      <li 
      onClick={()=>{
        hidePage()
      }}
       className='mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg'><Link href='home'>Home</Link></li>
      <li 
      onClick={()=>{
        hidePage()
      }}
       className='mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg'> <Link href='news'>News</Link></li>
      <li 
      onClick={()=>{
        hidePage()
      }} 
      className='mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg'><Link href='podcasts'>Podcasts</Link></li>
      <li 
      onClick={()=>{
        hidePage()
      }} 
      className='mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg'><Link href='resources'>Resources</Link></li>
            <li 
      onClick={()=>{
        hidePage()
      }} 
      className='mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg'><Link href='contact'>Contact Us</Link></li>
            </ul>
    <div className=' flex items-end mt-28 '>

    <Image src={icon} alt="" className='w-28' />
    </div>

    </div> : <div className={display ? 'hidden':'bg-[#141414]   w-[90%] h-screen absolute top-0 left-[-50px] z-40  justify-center items-center flex slide-out-right flex-col'}>
            <ul className="menu menu-vertical px-1 text-xl text-center   mt-28">
      <li className= { isOpen?   'hidden': 'mr-3 my-4 focus:bg-[#141414] focus:text-white   hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg' } ><Link href='home'>Home</Link></li>
      <li className= { isOpen?   'hidden': 'mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg' }> <Link href='news'>News</Link></li>
      <li className= { isOpen?   'hidden': 'mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg' }><Link href='podcasts'>Podcasts</Link></li>
      <li className= { isOpen?   'hidden': 'mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg' }><Link href='resources'>Resources</Link></li>
      <li className= { isOpen?   'hidden': 'mr-3 my-4 focus:bg-[#141414] focus:text-white  hover:bg-[#141414] hover:border hover:border-[#262626] rounded-lg' }><Link href='contact'>Contact Us</Link></li>
    </ul>
    <div className=' flex items-end mt-28 '>
    <Image src={icon} alt="" className='w-28 ' />
    </div>

    </div> 
    }
    </div>
    
    
    
    </>
  )
}
