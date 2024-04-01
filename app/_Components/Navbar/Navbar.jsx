'use client'
import logo from '../../../public/Images/Logo.png'
import HamburgerMenu from './Hamburger/HamburgerMenu'
import NavCenter from './NavCenter/NavCenter'
import Banner from './Banner/Banner'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
    <Banner/>
<div   className="navbar bg-lightDark  text-white  my-trans border-lineColor border ">
  <div className="navbar-start w-full lg:w-[50%] justify-between ">
    <Image src={logo} alt="" className='md:w-28 lg:ml-16 ml-5 w-28'/>
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
