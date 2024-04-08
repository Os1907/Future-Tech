import React from 'react'

export default function Number() {
  return (
    <>
    <div className='lg:mx-20 mx-4 border-b border-t border-lineColor'>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  w-full justify-between ">
                <div className="border-t md:col-span-1 col-span-2 border-lineColor flex justify-center items-center flex-col  py-10">
                    <p className="text-3xl md:text-5xl  text-white font-semibold">300 <span className="text-logo lg:ml-[-15px] ">+</span></p>
                    <p className=" text-base xl:text-lg text-gray5 ml-2">Resources available</p>
                </div>
                <div className=" md:border-l lg:border-r border-t border-lineColor md:col-span-1 col-span-2  flex justify-center items-center flex-col py-10 lg:py-20">
                    
                    <p className="text-3xl md:text-5xl   text-white font-semibold">12K <span className="text-logo lg:ml-[-15px] ">+</span></p>
                <p className=" text-base xl:text-lg text-gray5 ml-2">Total Downloads</p>
                </div>
                <div className=" lg:border-l md:border-r border-t border-lineColor md:col-span-1 col-span-2 flex justify-center items-center flex-col py-10 lg:py-20">
                    
                    <p className="text-3xl md:text-5xl  text-white font-semibold">10K <span className="text-logo lg:ml-[-15px]">+</span></p>
                <p className=" text-base xl:text-lg text-gray5 ml-2">Active User</p>
                </div>
                <div className=" border-t border-lineColor md:col-span-1 col-span-2 flex justify-center items-center  flex-col py-10">
                    <p className="text-3xl md:text-5xl  text-white font-semibold">100 <span className="text-logo lg:ml-[-15px]">+</span></p>
                    <p className=" text-base xl:text-lg text-gray5 ">Countries Accesses Our Content</p>
                </div>
          </div>
    </div>
    
    
    
    
    </>
  )
}
