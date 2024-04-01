'use client'
import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { MdArrowOutward } from "react-icons/md";
export default function Banner() {
  const [HideBar, setHideBar] = useState(true)

  return (
    <>

{ HideBar ?  <div className="w-full h-10 bg-dark relative flex items-center justify-center ">
        <p className='text-center text-white inline lg:text-sm text-[10px]  ' >
       Subscribe to our Newsletter For New & latest Blogs and Resources   
        <HiMiniXMark onClick={()=> setHideBar(false)} className='absolute top-3 cursor-pointer lg:right-28 lg:text-lg text-sm right-14 text-white border bg-[#4e4e4e] border-white rounded-full' />
        </p>
        <span className='mr-1 text-logo text-[18px]  ml-1 inline-block '><MdArrowOutward /></span>
    </div> : "" }
    </>
  )
}
