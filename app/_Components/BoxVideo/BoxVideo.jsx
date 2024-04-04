import Image from 'next/image'
import React from 'react'

import Button from '@/app/home/sections/Button'
import Link from 'next/link'
export default function BoxVideo(props) {
  return (
    <>

    <div className='lg:mx-20 mx-4'>

    <div className="grid grid-cols-3">

{
    props?.value.map((item)=>{
         return <>
         <div className="lg:col-span-1 col-span-3 lg:p-10 lg:pb-5 p-4  lg:border-r border-t border-lineColor ">
          <Link target='_blank' href="https://www.youtube.com/watch?v=MTJZpO3bTpg&pp=ygUKYWkgcG9kY2FzdA%3D%3D">
            <Image src={item.image} alt="" />
            </Link>  
            <div>
          <Link target='_blank' href="https://www.youtube.com/watch?v=MTJZpO3bTpg&pp=ygUKYWkgcG9kY2FzdA%3D%3D">

                <h5 className='mt-2 text-white text-lg font-semibold'>
                {item.name}
                </h5>
            </Link>  
            <Link target='_blank' href="https://www.youtube.com/watch?v=MTJZpO3bTpg&pp=ygUKYWkgcG9kY2FzdA%3D%3D">

                <p className='text-h2head my-1 text-sm'>
                {item.title}

                </p>
            </Link>  

            </div>
            <div className='lg:my-8 my-2 '>
            <Button value={item.button}/>
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
