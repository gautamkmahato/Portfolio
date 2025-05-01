import React from 'react'
import HeroSection from './_components/HeroSection'
import Blog from './_components/Blog'

export default function page() {
  return (
    <>
        <div className='bg-gray-50'>
        <HeroSection />
        <Blog />
        </div>
    </>
  )
}
