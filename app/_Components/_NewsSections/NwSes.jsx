import Image from 'next/image'
import React from 'react'
import Like from '../Like/Like'
import Share from '../share/Share'
import Button from '@/app/home/sections/Button'

export default function NwSes(props) {
  return (
    <>
    <div className="lg:mx-20 mx-4 border-t border-lineColor py-10 ">
    <div className="grid grid-cols-3 gap-5  ">

{
  props.value.map((item)=>{
    return <>
    <div className="md:col-auto lg:col-span-1 col-span-3">
      <Image src={item.image} alt=''/>
      <h6 className='text-white lg:text-base text-sm  mt-2'>
      {item.title}

      </h6>
      <div>
        <p className='text-h2head lg:text-sm text-[12px] my-3'>
        {item.type}
        </p>
        <div className='flex justify-between '>
          <div className='flex gap-x-3'>
            <Like value={item.like}/>
          <Share value={item.share}/>
          </div>
          
          <Button value={item.button}/>
        </div>


      </div>
    </div>

    </>
  })
}
    




    </div>
    </div>
    </>
  )
}
