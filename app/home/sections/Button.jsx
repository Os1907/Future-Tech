import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export default function Button(props) {
  return (
    <>
    <div>
     <p className={ props.value ? "mt-5 lg:mt-0 text-h2head cursor-pointer inline rounded-xl px-3 py-2 bg-dark border-lineColor border-2 lg:text-base text-[10px]" : "hidden"}>{props.value} <span className='mr-1 text-logo  text-sm  inline-block '><MdArrowOutward /></span></p> 
                </div>
    
    
    </>
  )
}
