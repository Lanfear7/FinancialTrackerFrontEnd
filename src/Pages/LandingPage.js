import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/LandingPage/Hero'
import Hook from '../Components/LandingPage/Hook'
import About from '../Components/LandingPage/About'
import Cards from '../Components/LandingPage/Cards'


function LandingPage() {
  return (
    <div className='w-full md:min-h-[90vh] bg-FTblack flex flex-wrap justify-center pb-5'>
        <NavBar className='basis-full'/>
        <Hero />
        <About />
        <Cards />
        <Hook />
    </div>
  )
}

export default LandingPage