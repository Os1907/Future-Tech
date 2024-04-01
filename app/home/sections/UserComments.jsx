import React from 'react'
import Image from 'next/image'
import person from '../../../public/Images/home/Image.png'
import person1 from '../../../public/Images/home/Image-2.png'
import person2 from '../../../public/Images/home/Image-3.png'
import heart from '../../../public/Images/home/New folder/heart.png'
import red from '../../../public/Images/home/New folder/red.png'
import comment from '../../../public/Images/home/New folder/comment.png'
import share from '../../../public/Images/home/New folder/share.png'
import Button from './Button'

export default function UserComments(props) {
    const asApi = [
        {
            image : person,
            name: "John Techson",
            position:"Quantum Computing",
            date:"October 15, 2023", 
            title:"The Quantum Leap in Computing",
            disc:"Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
            likes:"24.5K",
            comment:"50",
            share:"20"
        },
        {
            image : person1,
            name: "Sarah Ethicist",
            position:"AI Ethics",
            date:"November 5, 2023", 
            title:"The Ethical Dilemmas of AI",
            disc:"A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
            likes:"32K",
            comment:"72",
            share:"18"
        },
        {
            image : person2,
            name: "Astronomer X",
            position:"Space Exploration",
            date:"December 10, 2023", 
            title:"The Mars Colonization Challenge",
            disc:"Exploring the technical and logistical challenges of human colonization on Mars.",
            likes:"20K",
            comment:"31",
            share:"12"
        },
    ]
  return (
    <>
    <main className='bg-dark '>
        <div className=''>
        <div className='mx-4 lg:mx-20  overflow-hidden'>
        <div className="w-full carousel rounded-box gap-x-5 py-5 ">
        <div className="carousel-item ">
        <p className='bg-lightDark py-3 px-5 lg:px-12 lg:py-5 text-[10px]  lg:text-sm    rounded-xl cursor-pointer inline-flex text-white border border-lineColor'>
                    All
                </p>
        </div>
        {
                props.value.map((item)=>{
                    return <>
                      <div className="carousel-item ">
                <p className=' py-3 px-5  lg:px-12 lg:py-5 text-[10px]  lg:text-sm  rounded-xl cursor-pointer inline-flex text-white border border-lineColor'>
                    {item.section}
                </p>
            </div>
                    </>
                })
            }
        </div>
        </div>
        </div>
        {
            asApi.map((item)=>{
                return <>
                 <div className='lg:mx-20 border-t border-lineColor mx-4 grid grid-cols-4 lg:py-16 py-5'>
            <div className='lg:col-span-1 col-span-4 flex items-center  lg:justify-start my-4 lg:my-0 '>
                <div>
                    <Image src={item.image} alt='teamImage' className='size-16'/>
                </div>
                <div className='ml-5'>
                    <h4 className='text-white font-semibold text-lg'>
                    {item.name}
                    </h4>
                    <p className='text-h2head lg:text-sm text-[12px]'>
                    {item.position}
                    </p>
                </div>
                <div className='ml-10 lg:hidden '>
                <Button value={"view Blog"}/>
                </div>
            </div>
            <div className="lg:col-span-2  col-span-4  flex justify-center items-center lg:items-start lg:flex-col flex-wrap">
                <div >
                    <p className='font-semibold text-h2head text-sm lg:text-base' >
                    {item.date}
                </p>
                <h3 className='lg:mt-5 text-white lg:text-xl text-sm'>
                {item.title}
                </h3>
                    <span className='mt-1 text-h2head text-sm lg:text-base'>
                    {item.disc}
                    </span>
                </div>
                
                    <div className='flex mt-3 justify-center lg:justify-start  ml-2'>
                        <div className='py-2 bg-lightDark px-3  cursor-pointer border border-lineColor rounded-full flex '>
                            <Image src={red} alt='' className=' size-5 '/>
                            <p className='text-h2head ml-1  text-sm '>
                            {item.likes}
                            </p>
                        </div>
                        <div className='py-2 bg-lightDark px-3 cursor-pointer border mx-3 border-lineColor rounded-full flex '>
                            <Image src={comment} alt='' className=' size-5'/>
                            <p className='text-h2head ml-1  text-sm '>
                            {item.comment}

                            </p>
                        </div>
                        <div className='py-2 bg-lightDark px-3 cursor-pointer border border-lineColor rounded-full flex '>
                            <Image src={share} alt='' className=' size-5'/>
                            <p className='text-h2head ml-1  text-sm '>
                            {item.share}

                            </p>
                        </div>
                    </div>
            </div>
            <div className="lg:col-span-1  col-span-4 mt-8 lg:mt-0 lg:flex items-center justify-center hidden ">
                <Button value={"view Blog"}/>
            </div>
        </div>
                </>
            })
        }
       




    </main>
    
    
    
    </>
  )
}
