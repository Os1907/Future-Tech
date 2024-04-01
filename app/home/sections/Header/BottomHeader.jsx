import React from 'react'
import icon from '../../../../public/Images/home/Icon.png'
import icon1 from '../../../../public/Images/home/Icon (1).png'
import icon2 from '../../../../public/Images/home/Icon (2).png'
import { MdArrowOutward } from "react-icons/md";

import Image from 'next/image'

export default function BottomHeader() {
    const asApi = [
        {
       icon: icon,
        title:" Latest News Updates",
            paragraph:" Stay Current ",
            article:"Over 1,000 articles published monthly",
            id:"213"
        } ,
        {
       icon: icon1,
            title:"Expert Contributors",
            paragraph:"Thrusted Insights",
            article:"50+ renowned AI experts on our team",
            id:"214"

        } ,
        {
       icon: icon2,
            title:"Global Readership",
            paragraph:"Worldwide Impact",
            article:"2 million monthly readers",
            id:"215"

        } 

    ]
  return (
    <>
    <div className='lg:border-t border-b border-lineColor'>
        <div className='lg:mx-20 mx-4 grid grid-cols-3 gap-x-3'>
            {
                asApi.map((item , index)=>{
                    return ( <>
                <div key={item.id} className={index == 2 ?  "md:col-span-1 col-span-3 pr-4 mr-2": "md:col-span-1 col-span-3 md:border-lineColor lg:border-r pr-4 mr-2" }>
                <div className='lg:my-14 my-2 border-t border-lineColor lg:border-t-0 pt-5 lg:pt-0 '>
                <Image src={item.icon} alt="icon"  className='size-10' />
                <div className='flex justify-between lg:my-5 mt-2'>
                   <div>
                   <h3 className='text-base text-white lg:mb-3 mb-2'>
                   {item.title} 
                    </h3>
                    <p className='text-h2head text-sm'>
                    {item.paragraph}
                    </p>
                   </div>
                   <div className='bg-logo p-3 rounded-full h-10 cursor-pointer'>
                        <MdArrowOutward className='text-lineColor '/>
                   </div>
                </div>
                   <p className='text-h2head lg:text-base text-sm'>
                   {item.article}
                   </p>
                </div>
            </div>
            </>
                    )
                })
            }
            
        </div>
    </div>
    
    
    </>
  )
}
