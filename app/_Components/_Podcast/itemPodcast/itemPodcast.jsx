import React from 'react'
import { FaStar } from 'react-icons/fa'
import Button from '@/app/home/sections/Button'
import Link from 'next/link'
import Image from 'next/image'

export default function ItemPodcast(props) {

  return (
    <>
    {
        props?.value?.map((item)=>{
          return <>
          
          <div className="grid grid-cols-5 mx-4 lg:mx-20 border-t border-lineColor ">
            
                <div className= " lg:col-span-2 col-span-5  lg:py-28 py-2 flex flex-col items-center  lg:justify-center lg:items-start">

                    <Image src={item.icon} alt='icon' className='lg:size-auto size-16 '/>
                    <div className='flex justify-between items-center w-full '>
                        <h5 className='lg:my-5 my-3 text-center lg:text-left text-white lg:text-4xl text-2xl font-semibold ml-4 lg:mx-0 li'>
                        {item.title}
                    </h5>
                    {
                        item.star  == "yes" ? <div className=' flex items-center  rounded-full bg-dark border border-lineColor py-1 px-3 mr-4'>
                        <FaStar className=' mx-1 text-logo'/>
                        <FaStar className=' mx-1 text-logo'/>
                        <FaStar className=' mx-1 text-logo'/>
                        <FaStar className=' mx-1 text-logo'/>
                        <FaStar className=' mx-1 text-logo'/>
                    </div> : ""
                    }
                    
                    </div>
                    <p className='text-h2head text-sm ml-2'>
                        {item?.smallTitle }
                        </p> 
                    
                    {
                       item.button == "yes" ? <div className='w-[97%]  bg-lightDark border border-lineColor lg:p-8 p-3 rounded-xl'>
                        {
                            item.host == "yes" ? <p className='text-h2head text-sm'>
                            Host
                        </p> : ""
                        }

                        
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
                    {

                    }

{
    item?.conceptButton? <div className='w-full  py-4 lg:py-6 flex justify-center lg:justify-start '>
                         <Button value={item.conceptButton}/>
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
                       {item.paragraph}
                        </p>
                        <div className='grid grid-cols-3 my-5 justify-center lg:justify-between flex-wrap  items-center gap-4 l'>
                        <div className='border  col-auto lg:col-span-1 border-lineColor px-3 lg:py-3 py-2 rounded-lg bg-lightDark'>
                                <p className='text-h2head text-[12px] line-clamp-1 lg:text-base'>
                                    {item.box1}
                                </p>
                                <p className='text-white my-1 text-[12px] line-clamp-1 lg:text-base'>
                                {item.box1child}

                                </p>
                            </div>
                            <div className='border  col-auto lg:col-span-1 border-lineColor px-3 lg:py-3 py-2 rounded-lg bg-lightDark'>
                                <p className='text-h2head text-[12px] line-clamp-1 lg:text-base'>
                                {item.box2}

                                </p>
                                <p className='text-white my-1 text-[12px] line-clamp-1 lg:text-base'>
                                {item.box2child}

                                </p>
                            </div>
                           
                            <div className='border  col-auto lg:col-span-1 border-lineColor  px-3 lg:py-3 py-2 rounded-lg bg-lightDark'>
                                <p className='text-h2head text-[12px] lg:text-base line-clamp-1'>
                                {item.box3}

                                </p>
                                <p className='text-white my-1 text-[12px] lg:text-base line-clamp-1'>
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
