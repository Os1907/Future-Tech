import React from "react";
import Image from "next/image";
import bg from '../../../../public/Images/home/AI(1).png'
import bg2 from '../../../../public/Images/home/AI(2).png'
import people from '../../../../public/Images/home/Image.png'
import people2 from '../../../../public/Images/home/Image-2.png'
import people3 from '../../../../public/Images/home/Image-3.png'
import people4 from '../../../../public/Images/home/Image-1.png'
import { MdArrowOutward } from "react-icons/md";

export default function Header() {
  return (
    <>
      <div className="grid grid-cols-2   ">
        <div className="lg:col-span-1  col-span-2 flex justify-center items-center flex-col ">
          <div className="lg:mt-0 mt-5">
            <div className="flex  items-center relative">
          <Image src={bg2} alt="" className=" w-[10%]    relative  " />
              <p className="text-h2head my-2  lg:text-xl text-sm font-medium " >
              Your Journey to Tomorrow Begins Here
            </p>

            </div>
            
            <h1 className="lg:mr-5  text-white leading-snug lg:text-5xl text-3xl font-semibold">
              Explore the Frontiers of Artificial Intelligence
            </h1>
            <p className="text-gray5 lg:text-sm text-[12px] mt-4  ">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future. Join us on this visionary expedition into the heart of
              AI.
            </p>

            </div>
            <div className=" flex w-full justify-between lg:mt-10">
                <div className="mt-14">
                    <p className="text-3xl mb-2 text-white font-semibold">300 <span className="text-logo">+</span></p>
                    <p className="text-sm text-gray5">Resources available</p>
                </div>
                <div className="mt-14">
                    
                    <p className="text-3xl mb-2 text-white font-semibold">12K <span className="text-logo">+</span></p>
                <p className="text-sm text-gray5">Total Downloads</p>
                </div>
                <div className="mt-14 mr-5">
                    <p className="text-3xl mb-2 text-white font-semibold">10K <span className="text-logo">+</span></p>
                    <p className="text-sm text-gray5">Active Users</p>

                </div>
          </div>

        </div>
        <div className="lg:col-span-1 col-span-2  lg:border-lineColor lg:border-l relative pb-10">

            <Image src={bg} alt="" className="opacity-100 animate-pulse mt-5 lg:mx-10 " />
            <div className="lg:ml-20   ">
                <div className="inline-flex my-5  lg:border-lineColor lg:border rounded-full px-3 py-1  ">
                <Image src={people}  className="img-fluid rounded-top size-12"    alt="client"/>
                <Image src={people4} className="img-fluid rounded-top size-12 ml-[-10px]"   alt="client"/>
                <Image src={people2} className="img-fluid rounded-top size-12 ml-[-10px]"
                    alt="client"
                />
                <Image
                    src={people3}
                    className="img-fluid rounded-top size-12 ml-[-10px]"
                    alt="client"
                />
                </div>
                <p className="text-white text-2xl  font-medium">Explore 1000 <span className="text-logo">+</span> resources</p>
                <span className="text-h2head   text-sm">  Over 1,000 articles on emerging tech trends and breakthroughs  </span>
            </div>
                <div className="  lg:ml-20 mt-5">
                <p className="text-h2head cursor-pointer inline rounded-xl p-3 border-lineColor border-2">Explore Resources <span className='mr-1 text-logo   inline-block '><MdArrowOutward /></span></p> 
                </div>
        </div>
      </div>
    </>
  );
}
