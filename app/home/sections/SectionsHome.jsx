import React from 'react'
import Header from './Header/Header'
import BottomHeader from './Header/BottomHeader'
import MainTtile from './MainTtile'
import BlogSections from './BlogSections'
import UserComments from './UserComments'
import Downloads from './Downloads'
import Testimonials from './Testimonials'

export default function SectionsHome() {
  const title=
    [{
      par:"Unlock the power of",
      main:"FutureTeach Features"
    },
    {
      par:"A Knowledge Treasure Trove",
      main:"Explore FutureTech's In-Depth Blog Posts",
      link: "View all Blogs"
    },
    {
      par:"Your Gateway to In-Depth Information",
      main:"Unlock Valuable Knowledge with FutureTech's Resources",
      link: "View All Resources"
    },
    {
      par:"What Our Readers Say",
      main:"Real Word from Real Readers",
      link: "View All Testimonials"
    }
  ]
   const comments = [
      {section:"Quantum Computing"},
      {section:"AI Ethics"},
      {section:"Space Exploration"},
      {section:"Biotechnology"},
      {section:"Renewable Energy"},
   ] 
  return (
    <>
<header className='min-h-screen bg-dark '>
        <div className='lg:mx-20 mx-4 '>
            <Header/>
        </div>
<BottomHeader/>
    </header>
    <MainTtile value={title[0]}/>
    <BlogSections/>
    <MainTtile value={title[1]}/>
<UserComments value={comments}/>
<MainTtile value={title[2]}/>
<Downloads/>
<MainTtile value={title[3]}/>
<Testimonials/>
    </>
  )
}
