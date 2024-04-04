import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import icon from '../../../public/Images/podcast/podcastIco1.png'
import icon2 from '../../../public/Images/podcast/podcastIco2.png'
import cover from '../../../public/Images/podcast/container.png'
import cover2 from '../../../public/Images/podcast/container1.png'
import img from '../../../public/Images/podcast/boxVideo/Sub Container.png'
import img2 from '../../../public/Images/podcast/boxVideo/Sub Container (1).png'
import img3 from '../../../public/Images/podcast/boxVideo/Sub Container (2).png'
import img4 from '../../../public/Images/podcast/boxVideo/Sub Container (3).png'
import img5 from '../../../public/Images/podcast/boxVideo/Sub Container (4).png'
import img6 from '../../../public/Images/podcast/boxVideo/Sub Container (5).png'
import ItemPodcast from './itemPodcast/itemPodcast'
import MainTtile from '@/app/home/sections/MainTtile'
import BoxVideo from '../BoxVideo/BoxVideo'

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
    const podcast =[
        {
        image:img,
        name:"AI in Healthcare",
        title:"Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.",
        button:"listen Podcast"
        },
        {
        image:img2,
        name:"AI Ethics",
        title:"Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.",
        button:"listen Podcast"

        },
        {
        image:img3,
        name:"Machine Learning Explained",
        title:"Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode",
        button:"listen Podcast"

        },
        {
        image:img4,
        name:"AI and the Future of Work",
        title:"Dr. Olivia White joins John Parker to discuss the evolving role of AI in the workplace.",
        button:"listen Podcast"

        },
        {
        image:img5,
        name:"AI in Education",
        title:"Explore the role of AI in education as Emily Turner discusses how AI is transforming the learning experience.",
        button:"listen Podcast"

        },
        {
            image:img6,
            name:"AI in Entertainment",
            title:"David Smith as they explore the influence of AI in the entertainment industry.",
        button:"listen Podcast"

        },

    ]
  return (
    <>
    <div className=' bg-dark border-t border-lineColor '>
    <ItemPodcast value={data}/>
    <MainTtile value={title[0]} />
    <BoxVideo value={podcast}/>
    </div>
    
    
    
    
    </>
  )
}
