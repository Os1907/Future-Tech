import React from 'react'
import Headpgs from '../_Components/HeaderPages/Headpgs'
import Number from './_componets/Number'
import MainTtile from '../home/sections/MainTtile'
import ItemPodcast from '../_Components/_Podcast/itemPodcast/itemPodcast'
import icon from '../../public/Images/Resources/Icon.png'
import icon2 from '../../public/Images/Resources/Icon (1).png'
import cover from '../../public/Images/Resources/Image (1).png'
import cover2 from '../../public/Images/Resources/Image (2).png'

export default function page() {
  const title=
    [
    {
      par:"Dive into the Details",
      main:"In-Depth Reports and Analysis",
      link: "View All Testimonials"
    }
  ]
  const data =[
    {
    icon: icon ,
    title: "Quantum Computing Whitepaper ",
    stars:"yes",
    button: "no" ,
    host : "no",
    conceptButton:"Download PDF Now",
    smallTitle:"Provides technical specifications and requirements for implementing quantum computing systems.",
    buttonTitle: "Dr.Sarah Mitchell" ,
    star:"no",
    cover : cover ,
    titleleft :"Delves into the transformative impact of AI",
    paragraph: "Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more.", 
    box1:"Total Episodes" ,
    box1child:"50",
    box2:"Average Episode Length" ,
    box2child:"30 min",
    box3:"Release Frequency" ,
    box3child:"Weekly",
    },
    {
        icon: icon2 ,
        title: " Space Exploration Whitepaper",
        stars:"yes",
        button: "no" ,
        host : "no",
    conceptButton:"Download PDF Now",
        smallTitle:"Explores Mars colonization, asteroid resource potential, and space tourism.",
        buttonTitle: "Mark Anderson" ,
        star:"no",
        cover : cover2 ,
        titleleft :"Engage in thought-provoking conversations with leading experts.",
        paragraph: "Mark discusses the future of AI, the impact on society, and how it's shaping industries worldwide. Engage in thought-provoking conversations with leading experts.", 
        box1:"Total Episodes" ,
        box1child:"40",
        box2:"Average Episode Length" ,
        box2child:"40 min",
        box3:"Release Frequency" ,
        box3child:"Monthly",
        },

]
  
  return (
    <>
    <section className='bg-dark min-h-screen '>
        <Headpgs title={"Unlock the World of "} p={"Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."} h3={"Knowledge"}/>
        <Number/>
        <MainTtile value={title[0]} />
    <ItemPodcast value={data}/>


    </section>
    
    
    
    
    </>
  )
}
