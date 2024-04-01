import React from 'react'
import heart from '../../../public/Images/home/New folder/heart.png'
import Image from 'next/image'


export default function Like(props) {
  return (
    <>
    <div className='py-2 bg-lightDark px-3  cursor-pointer border border-lineColor rounded-full flex '>
                            <Image src={heart} alt='' className=' lg:size-5 size-4 '/>
                            <p className='text-h2head ml-1  lg:text-sm text-[12px]'>
                                    {
                                        props.value
                                    }
                            </p>
                        </div>
    
    
    
    </>
  )
}
