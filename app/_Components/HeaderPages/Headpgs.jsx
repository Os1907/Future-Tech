import React from 'react'

export default function Headpgs(props) {
  return (
    <>
    <div className='lg:mx-20 mx-4 '>
            <div className='lg:py-20 py-5'>
                <h2 className='text-white lg:text-left text-center lg:text-7xl  font-semibold   text-4xl sm:text-5xl md:text-6xl  '>
                {props.title}<p className='font-normal sm:inline'>  <span className='sm:hidden'>{props.h3}</span> </p>
                {/* {"Today's"} Headline:   */}
            </h2>
            <div className='lg:flex lg:items-center'>
                <h3 className='hidden sm:block my-2 lg:text-6xl text-4xl sm:text-5xl md:text-6xl text-white'>
                 {props.h3}
            </h3>
            <p className=' lg:text-sm lg:text-left text-center text-[12px] text-h2head lg:ml-3 lg:mt-5 mt-3'>
                {props.p}
            </p>
            </div>
            
            </div>
        </div>
    
    
    
    </>
  )
}
