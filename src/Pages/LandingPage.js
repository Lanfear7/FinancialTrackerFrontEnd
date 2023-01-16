import React from 'react'
import NavBar from '../Components/NavBar'
import { useSpring, animated } from '@react-spring/web'
import { Link } from 'react-router-dom'

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
    <div className='w-full min-h-screen bg-FTblack flex flex-wrap justify-center'>
        <NavBar className='basis-full'/>
        <div className='h-48 w-full flex flex-wrap justify-center md:w-1/2'>
            <animated.div
            style={textAnimation}
            >
                <h1 className='text-center basis-full text-FTgreen text-4xl'>Welcome to Drift</h1>
                <h1 className='text-center basis-full text-FTgreen text-xl'>One stop for tracking all your finances</h1>
            </animated.div>
            <div className='bg-FTblack h-full w-full relative z-10 flex justify-center items-center'>
                <animated.div 
                style={buttonFadeInAnimation}
                className='w-full flex justify-around'>
                    <button className='bg-FTgray px-5 py-1 rounded-lg text-FTwhite'><Link to='/Authentication/SignUp'>SignUp</Link></button>
                    <button className='bg-FTgray px-5 py-1 rounded-lg text-FTwhite'><Link to='/Authentication/LogIn'>LogIn</Link></button>
                </animated.div>
            </div>
            
        </div>
    </div>
  )
}

export default LandingPage