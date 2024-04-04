import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import icon from '../../../public/Images/podcast/podcastIco1.png'
import icon2 from '../../../public/Images/podcast/podcastIco2.png'
import cover from '../../../public/Images/podcast/container.png'
import cover2 from '../../../public/Images/podcast/container1.png'
import Button from '@/app/home/sections/Button'
import Link from 'next/link'
import ItemPodcast from './itemPodcast/itemPodcast'
import MainTtile from '@/app/home/sections/MainTtile'

export default function Podcast(props) {
    const data =[

        {
        icon: icon ,
        title: "AI Revolution ",
        stars:"yes",
        button: "yes" ,
        buttonTitle: "Dr.Sarah Mitchell" ,
        star:"yes",
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
            title: " AI Conversations",
            stars:"yes",
            button: "yes" ,
            buttonTitle: "Mark Anderson" ,
            star:"yes",
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
    let title=[
        {
                par:"Stay Informed with Fresh Content",
                main:"Latest Podcast Episodes"
        }
    ]
  return (
    <>
    <div className=' bg-dark border-t border-lineColor '>

<ItemPodcast value={data}/>
    <MainTtile value={title[0]} />
    </div>
    
    
    
    
    </>
  )
}
