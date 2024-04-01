import React from 'react'
import HeadTitle from './_HeadTitle/HeadTitle'
import NwSes from '../_Components/_NewsSections/NwSes'
import cover1 from '../../public/Images/news/cover (1).png'
import cover2 from '../../public/Images/news/cover (2).png'
import cover3 from '../../public/Images/news/cover (3).png'
import MainTtile from '../home/sections/MainTtile'
import UserComments from '../home/sections/UserComments'

export default function page() {
    const asApi = [
      {
        image: cover1,
        title: "A Decisive Victory for Progressive Policies ",
        type: "Politics",
        like: "2.2k",
        share: "60",
        button: "Read More",
      },
      {
        image: cover2,
        title: "Tech Giants Unveil Cutting-Edge AI Innovations ",
        type: "Technology",
        like: "6k",
        share: "80",
        button: "Read More",
      },
      {
        image: cover3,
        title: "COVID-19 Variants ",
        type: "Health",
        like: "10.2k",
        share: "125",
        button: "Read More",
      },
    ];
    const title=[
            {
                par:"Welcome to Our News Hub",
                main:"Discover the World of Headlines",
                link: "View all News"

              },
    ]
    const comments = [
        {section:"Technology"},
        {section:"Politics"},
        {section:"Health"},
        {section:"Environments"},
        {section:"Sports"},
        {section:"Global"},
     ] 
  return (
    <>
    <section className='bg-dark min-h-screen '>
        <div className='lg:mx-20 mx-4 '>
            <div className='lg:py-24 py-5'>
                <h2 className='text-white lg:text-7xl  font-semibold   text-4xl sm:text-5xl md:text-6xl  '>
                {"Today's"} Headline: <p className='font-normal sm:inline'> Stay <span className='sm:hidden'>Informed</span> </p> 
            </h2>
            <div className='lg:flex lg:items-center'>
                <h3 className='hidden sm:block my-2 lg:text-6xl text-4xl sm:text-5xl md:text-6xl text-white'>
                 Informed
            </h3>
            <p className=' lg:text-sm text-[12px] text-h2head lg:ml-3'>
            Informed
            Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage.
                </p>
            </div>
            
            </div>
            







        </div>
        <HeadTitle/>
        <NwSes value={asApi}/>
        <MainTtile value={title[0]}/>
        <UserComments value={comments}/>

    </section>
    
    
    
    
    
    
    
    
    
    </>
  )
}
