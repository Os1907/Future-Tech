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
    titleleft :"Quantum Computing Whitepaper",
        paragraph: "An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.", 
        box1:"Publication Date" ,
        box1child:"July 2023",
        box2:"Category" ,
        box2child:"Quantum Computing",
        box3:"Author" ,
        box3child:"Dr.Quantum",
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
        titleleft :"Space Exploration Whitepaper.",
        paragraph: "An in-depth whitepaper covering the latest advancements in space exploration, including Mars missions and asteroid mining.", 
        box1:"Publication Date" ,
        box1child:"September 2023",
        box2:"Category" ,
        box2child:"Space Exploration",
        box3:"Author" ,
        box3child:"FutureTech Space Division",
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
