'use client'

import Link from "next/link"

export default function NavCenter() {
  return (
    <>

<div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      <li className='mr-3 focus:bg-dark focus:text-white  hover:bg-dark hover:border hover:border-[#262626] rounded-lg '><Link href='home'>Home</Link></li>
      <li className='mr-3 focus:bg-dark focus:text-white  hover:bg-dark hover:border hover:border-[#262626] rounded-lg'> <Link href='about'>About Us</Link></li>
      <li className='mr-3 focus:bg-dark focus:text-white  hover:bg-dark hover:border hover:border-[#262626] rounded-lg'><Link href='properties'>Properties</Link></li>
      <li className='mr-3 focus:bg-dark focus:text-white  hover:bg-dark hover:border hover:border-[#262626] rounded-lg'><Link href='service'>Services</Link></li>
    </ul>
  </div>
    
    
    
    
    </>
  )
}
