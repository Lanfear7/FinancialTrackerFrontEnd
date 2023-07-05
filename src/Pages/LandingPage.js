import React from 'react'
import NavBar from '../Components/NavBar'
import { useSpring, animated } from '@react-spring/web'
import Hero from '../Components/LandingPage/Hero'


function LandingPage() {
    const textAnimation = useSpring({
        from: {y: 200},
        to: {y: -50},
        config:{
            duration: 800
        }
    })
    const buttonFadeInAnimation = useSpring({
        from: {opacity: 0},
         to: { opacity : 1},
         delay: 900
    })
  return (
    <div className='w-full md:min-h-[90vh] bg-FTblack flex flex-wrap justify-center pb-5'>
        <NavBar className='basis-full'/>
        <Hero />
    </div>
  )
}

export default LandingPage