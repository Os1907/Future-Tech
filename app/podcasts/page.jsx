import React from 'react'
import HeadTitle from '../news/_HeadTitle/HeadTitle'
import Headpgs from '../_Components/HeaderPages/Headpgs'
import Podcast from '../_Components/_Podcast/Podcast'

export default function page() {
  return (
    <>
    <section className='bg-dark min-h-screen '>
        <Headpgs title={"Unlock the World of Artificial Intelligence "} p={" Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."} h3={"through Podcasts"}/>
       <Podcast/> 
    </section>
    
    
    </>
  )
}
