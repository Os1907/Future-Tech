import React from 'react'
import Image from 'next/image'
import people from '../../../public/Images/home/Image.png'
import people2 from '../../../public/Images/home/Image-2.png'
import people3 from '../../../public/Images/home/Image-3.png'
import people4 from '../../../public/Images/home/Image-1.png'
import ebookCover from '../../../public/Images/home/ebookcover.png'
import icon from '../../../public/Images/home/EBOOK.png'
import whitepaper from '../../../public/Images/home/whitepapers.png'
import whiteCover from '../../../public/Images/home/whitecover.png'
import { MdArrowOutward } from 'react-icons/md'
import { IoEyeSharp } from "react-icons/io5";

export default function Downloads() {
    const asApi = [
        {
            img: icon,
            name:"Ebook",
            discr:"Explore our collection of ebooks covering a wide spectrum of future technology topics.",
            righttitle:"Variety of Topics",
            cover:ebookCover,
            rightDisc:"Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
            total:"Over 100 ebooks",
            bottomDisc:"Ebooks are authored by renowned experts with an average of 15 years of experience",
            id:"213121b"
        },
        {
            img: whitepaper,
            name:"Whitepaper",
            discr:"Dive into comprehensive reports and analyses with our collection of whitepapers. ",
            righttitle:"Topics Coverage",
            cover:whiteCover,
            rightDisc:"Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).",
            total:"Over 50 whitepapers",
            bottomDisc:"Whitepapers are authored by subject matter experts with an average of 20 years of experience.",
            id:"2131w1b"

        },
    ]
  return (
    <>
    <section className='bg-dark lg:mx-20 mx-4'>
        {
                asApi.map((item)=>{
                    return <>
                    
                    <div className="grid grid-cols-5 gap-x-2 border-b border-lineColor ">
            <div className="lg:col-span-2  col-span-5 lg:py-20 py-3 flex flex-col items-center lg:items-start ">
                <Image src={item.img} alt='icon' className='lg:size-auto size-16 '/>
                <h5 className='lg:my-5 my-3 text-center lg:text-left text-white lg:text-4xl text-2xl font-semibold'>
                    {item.name}
                </h5>
                <p className='text-h2head text-center lg:text-left'>
                {item.discr}
                </p>

                <div className='lg:my-5 my-3 mr-4 '>
                    <button className='border font-medium w-full lg:text-base text-[12px]  lg:py-4 p-4  text-h2head bg-lightDark border-lineColor rounded-lg'>
                        Download {item.name} Now <span className='mr-1 text-logo lg:text-lg text-base     inline-block '><MdArrowOutward /></span>
                    </button>
                </div>
                <div className='border font-medium w-auto lg:my-3 my-0 lg:p-4 px-3 py-1  bg-lightDark border-lineColor rounded-xl flex   lg:inline-flex items-center'>
                    <div>
                    <p className='text-h2head lg:text-sm text-[12px] '>Downloaded by</p>
                    <h6 className='text-white lg:text-xl text-base'>
                        10k + Users
                    </h6>
                </div>
                    <div className="inline-flex lg:my-5 my-2 ml-5 lg:border-lineColor lg:border rounded-full px-4 py-2 bg-dark  ">
                <Image src={people}  className="img-fluid rounded-top size-8 lg:size-10"    alt="client"/>
                <Image src={people4} className="img-fluid rounded-top size-8 lg:size-10 ml-[-10px]"   alt="client"/>
                <Image src={people2} className="img-fluid rounded-top size-8 lg:size-10 ml-[-10px]"
                    alt="client"
                />
                <Image
                    src={people3}
                    className="img-fluid rounded-top size-8 lg:size-10 ml-[-10px]"
                    alt="client"
                />
                </div>
                </div>

            </div>
            <div className="lg:col-span-3 col-span-5 lg:py-20 py-5 lg:border-l border-t  lg:border-t-0  border-lineColor">
                <div className='lg:ml-8 flex lg:justify-between justify-center item-center flex-wrap'>
                    <h5 className='text-white lg:w-[30%] font-semibold text-lg'>
                            Variety of Topics
                    </h5>
                    <p className='text-h2head text-[12px] lg:text-sm text-center lg:text-left lg:w-[70%]'>
                    {item.rightDisc}
                    </p>
                </div>
                <div className='my-4 lg:mr-5'>
                    <Image src={item.cover} alt="ai" className='lg:ml-8 ' />
                    </div>

                    <div className='flex justify-between items-center  flex-wrap lg:flex-nowrap gap-y-3 '>
                        <div className='lg:w-[30%] w-full border  border-lineColor lg:p-5 p-3  lg:ml-8 rounded-lg bg-lightDark'>
                            <p className='text-h2head text-[12px] lg:text-sm'> Total {item.name} </p>
                            <p className='text-white text-sm lg:text-base '> {item.total}</p>
                        </div>
                        <div className='lg:w-[70%] w-full border border-lineColor lg:p-5 p-3 lg:ml-8 rounded-lg bg-lightDark'>
                            <p className='text-h2head text-[12px] lg:text-sm'> Download Formats</p>
                            <div className='flex justify-between items-center'>
                            <p className='text-white text-sm lg:text-base '> PDF format for access. </p>
                            <div className='bg-dark border border-lineColor flex py-2 cursor-pointer px-4 rounded-lg items-center'>
                                <p className='text-h2head text-sm lg:text-base'>
                                    Preview
                                </p>
                                <IoEyeSharp  className='text-logo inline  ml-2'/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='  border border-lineColor lg:p-5 p-3 my-3 lg:ml-8   rounded-lg bg-lightDark'>
                            <p className='text-h2head text-[12px] lg:text-sm'> Average Author Expertise</p>
                            <p className='text-white text-sm lg:text-base'> {item.bottomDisc}</p>
                        </div>
            </div>
        </div>
                    </>
                })
        }
        
    </section>




    </>
  )
}
