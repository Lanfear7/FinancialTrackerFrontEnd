import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/LandingPage/Hero'
import Hook from '../Components/LandingPage/Hook'
import About from '../Components/LandingPage/About'
import Cards from '../Components/LandingPage/Cards'
import Closer from '../Components/LandingPage/Closer'
import Footer from '../Components/LandingPage/Footer'


function LandingPage() {
  return (
    <div className='w-full md:min-h-[90vh] bg-FTblack flex flex-wrap justify-center'>
        <NavBar className='basis-full'/>
        <Hero/>
        <About/>
        <Cards/>
        <Hook/>
        <Closer/>
        <Footer/>
    </div>
  )
}

export default LandingPage