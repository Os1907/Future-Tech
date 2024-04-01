import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import Button from './Button'

export default function MainTtile(props) {
  return (
    <>
    <div className='bg-lightDark border-lineColor border-t border-b lg:py-14 py-7'>
      
        <div className='lg:mx-20 mx-4 bg-lineColor py-2 px-3 inline-flex mt-5'>
    <p className='text-white'>
        {props?.value?.par}
    </p>
        </div>
    <div className=" lg:flex items-center justify-between lg:mx-20  mx-4 ">
      <div className='lg:w-[80%] ' >
        <h3 className='text-white lg:text-5xl mt-3 text-3xl    my-5'>
    {props?.value?.main}
    </h3>
      </div>
    <div className='lg:w-[20%]'>

    <Button value={props?.value?.link}/>
    </div>
                </div>
    </div>
    
    
    
    </>
  )
}
