import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import img from '../../../public/Images/home/testimo/Profile.png'
import img1 from '../../../public/Images/home/testimo/Profile-1.png'
import img2 from '../../../public/Images/home/testimo/Profile-2.png'
import img3 from '../../../public/Images/home/testimo/Profile-3.png'
import img4 from '../../../public/Images/home/testimo/Profile-4.png'
import img5 from '../../../public/Images/home/testimo/Profile-5.png'

export default function Testimonials() {
    const asApi = [
        {
            image:img,
            nameUser:"Sarah Thompson",
            location:"San Francisco, USA",
            message:"The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
            id:1
        } ,
        {
            image:img1,
            nameUser:"Raj Patel",
            location:"Mumbai, India",
            message:"The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.",
            id:2

        } 
        ,
        {
            image:img2,
            nameUser:"Emily Adams",
            location:"London, UK",
            message:"The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
            id:3

        } 
        ,
        {
            image:img4,
            nameUser:"Jessica Miller",
            location:"Boston, USA",
            message:"The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
            id:4

        } ,
        {
            image:img3,
            nameUser:"Alan Jackson",
            location:"Houston, USA",
            message:"The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.",
            id:5
        } 
        ,{
            image:img5,
            nameUser:"Diego Lopez",
            location:"Barcelona, Spain",
            message:"The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.",
            id:6

        } 

    ]
  return (
    <>
    <section className='bg-dark border-b border-lineColor'>
        <div className="grid grid-cols-3 lg:mx-20 mx-4  ">

{
    asApi.map((item , index)=>{
        return <>
        <div key={item.id} className={ item.id / 2 == 1 || item.id / 2 == 2.5  ? "lg:col-span-1 col-span-3  border-lineColor lg:border-b lg:border-l lg:border-r lg:py-14 py-3 " : "lg:col-span-1 col-span-3 border-lineColor lg:border-b lg:py-14 py-3"}>
                <div className='flex items-center justify-center mt-5'>
                    <Image src={item.image} alt='person'/>
                    <div className='ml-3'>
                        <p className='text-white font-semibold'>
                        {item.nameUser}
                        </p>
                        <span className='text-h2head text-sm '>
                        {item.location}
                        </span>
                    </div>

                </div>
                <div className="flex relative bg-lightDark lg:mx-10 mx-4 justify-center p-7 mt-8 rounded-lg border-lineColor border">
                    <p className='text-white text-sm'>                        
                    {item.message}

                    </p>
                    <div className='absolute flex items-center top-[-10%] rounded-full bg-dark border border-lineColor py-1 px-3'>
                    <FaStar className=' mx-1 text-logo'/>
                    <FaStar className=' mx-1 text-logo'/>
                    <FaStar className=' mx-1 text-logo'/>
                    <FaStar className=' mx-1 text-logo'/>
                    <FaStar className=' mx-1 text-logo'/>
                    </div>
                </div>

            </div>
        
        </>
    })
}
            
            
            
        </div>
    </section>
    </>
  )
}
