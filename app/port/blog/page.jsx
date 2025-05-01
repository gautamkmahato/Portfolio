import React from 'react'
import HeroSection from './_components/HeroSection'
import Blog from './_components/Blog'
import Navbar from '../_components/Navbar'

export default function page() {
  return (
    <>
        <div className='bg-gray-50'>
        <Navbar />
          <HeroSection />
          <Blog />
        </div>
    </>
  )
}
