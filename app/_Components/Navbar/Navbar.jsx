'use client'
import logo from '../../../public/Images/Logo.png'
import HamburgerMenu from './Hamburger/HamburgerMenu'
import NavCenter from './NavCenter/NavCenter'
import Banner from './Banner/Banner'
import Image from 'next/image'
import Link from 'next/link'
import {  useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  const scrollRef=useRef() 

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);

      if (scrollPosition > 0) {
        scrollRef.current.classList.remove("relative")
        scrollRef.current.classList.add("fixed" , "top-0"  ,"lg:right-[10%]" ,"lg:w-[80%]"  ,  "lg:rounded-3xl" , "lg:mt-4" , "z-50" , "shadow" ,"shadow-md"  )
    }
    if (scrollPosition == 0){
        scrollRef.current.classList.remove("fixed" , "top-0"  ,"lg:right-[0]" ,"lg:w-[80%]"  ,  "lg:rounded-3xl" , "lg:mt-4" , "shadow" ,"shadow-md" )
    
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[scrollPosition])
  
  return (
    <>
    <Banner/>
<div  ref={scrollRef}  className="navbar bg-lightDark fixed z-50  text-white  my-trans border-lineColor border ">
  <div className="navbar-start w-full lg:w-[50%] justify-between ">
    <div className='order-1 flex justify-start '>

    <Image src={logo} alt="" className='md:w-28 lg:ml-16 ml-5 w-28 '/>
    </div>
    <HamburgerMenu/>
  </div>
  <NavCenter/>
  <div className="navbar-end hidden lg:flex">
    <Link className="mr-4 py-2 px-4 bg-logo text-dark focus:text-white    border border-[#262626] rounded-lg" href='contact'>Contact Us</Link>
  </div>
</div>





    
    
    
    
    </>
  )
}
