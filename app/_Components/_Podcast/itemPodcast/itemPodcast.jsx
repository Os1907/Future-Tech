import React from 'react'
import { FaStar } from 'react-icons/fa'
import Button from '@/app/home/sections/Button'
import Link from 'next/link'
import Image from 'next/image'

export default function ItemPodcast(props) {
    // console.log(props.value)
  return (
    <>
    {
        props?.value?.map((item)=>{
          return <>
          
          <div className="grid grid-cols-5 mx-4 lg:mx-20 border-t border-lineColor ">
            
                <div className="lg:col-span-2 col-span-5  lg:py-28 py-3 flex flex-col items-start  lg:justify-center lg:items-start  ">

                    <Image src={item.icon} alt='icon' className='lg:size-auto size-16 '/>
                    <div className='flex justify-between items-center w-full '>
                        <h5 className='lg:my-5 my-3 text-center lg:text-left text-white lg:text-4xl text-2xl font-semibold lg:mx-4'>
                        {item.title}
                    </h5>
                    <div className=' flex items-center  rounded-full bg-dark border border-lineColor py-1 px-3 mr-4'>
                        <FaStar className=' mx-1 text-logo'/>
                        <FaStar className=' mx-1 text-logo'/>
                        <FaStar className=' mx-1 text-logo'/>
                        <FaStar className=' mx-1 text-logo'/>
                        <FaStar className=' mx-1 text-logo'/>
                    </div>
                    </div>
                    {
                       item.button == "yes" ? <div className='w-[97%]  bg-lightDark border border-lineColor lg:p-8 p-3 rounded-xl'>
                        <p className='text-h2head text-sm'>
                            Host
                        </p>
                        <div className='flex justify-between'>
                        <h4 className='text-white'>
                            {
                                item.buttonTitle
                            }
                        </h4>
                        <Button value={"Listen Podcast"}/>
                        </div>
                    </div> : ""
                    }
                    

                </div>

                <div className="lg:col-span-3 col-span-5 lg:py-20 lg:border-l border-lineColor  p-3">
                    <div className='lg:mx-4 my-3'>
                    <Link target='_blank' href="https://youtu.be/VHHT6W-N0ak?si=fmi5BGHcGRaYS8Pk">  <Image src={item.cover} alt='brain' /> </Link>    
                        <h5 className='text-white mt-2 mb-1 font-medium text-xl'>
                        Delves into the transformative impact of AI 
                        </h5>
                        <p className='text-h2head  text-sm'>
                        Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more.
                        </p>
                        <div className='flex my-5 justify-center lg:justify-between flex-wrap  items-center gap-4 lg:gap-0'>
                        <div className='border border-lineColor lg:px-10 px-5 lg:py-3 py-2 rounded-lg bg-lightDark'>
                                <p className='text-h2head text-sm lg:text-base'>
                                    {item.box1}
                                </p>
                                <p className='text-white my-1 text-sm lg:text-base'>
                                {item.box1child}

                                </p>
                            </div>
                            <div className='border border-lineColor lg:px-10 px-5 lg:py-3 py-2 rounded-lg bg-lightDark'>
                                <p className='text-h2head text-sm lg:text-base'>
                                {item.box2}

                                </p>
                                <p className='text-white my-1 text-sm lg:text-base'>
                                {item.box2child}

                                </p>
                            </div>
                           
                            <div className='border border-lineColor lg:px-10 px-5 lg:py-3 py-2 rounded-lg bg-lightDark'>
                                <p className='text-h2head text-sm lg:text-base'>
                                {item.box3}

                                </p>
                                <p className='text-white my-1 text-sm lg:text-base'>
                                {item.box3child}

                                </p>
                            </div>

                        </div>
                    </div>

                </div>

        </div>
          </>
        })
    }
    

    
    
    
    </>
  )
}
