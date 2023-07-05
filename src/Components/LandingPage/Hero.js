import React from 'react'
import { Link } from 'react-router-dom'
import HandWithMoney from '../../Images/3d-render-hand-with-coins-bills-isolated-set.png'

function Hero() {
  return (
    <div className='w-full h-full flex flex-wrap justify-center md:flex-wrap-reverse md:mt-24'>
            <div className='text-FTwhite pl-10 basis-full md:basis-1/2'>
                <h1
                className='text-4xl mb-3'>Introducing a new way<br></br> to do finances</h1>
                <p
                className='mb-16 w-11/12 lg:w-3/4 mt-5 text-lg'>A modern way to keep track of your finaces and expenses all in one place.
                    See monthly break downs of you expenses so you know where you are saving money and have your money work for you. 
                </p>
                <Link 
                to={'/Authentication/SignUp'}
                className='bg-FTgreen text-FTwhite p-2 px-7 text-xl rounded-3xl ml-5'
                >Get Started <b>&gt;</b></Link>
            </div>
            <div className='text-FTwhite md:basis-1/2'>
                <figure className='w-full sm:pl-20 lg:pl-10'>
                    <img src={HandWithMoney}></img>
                </figure>
            </div>
        </div>
  )
}

export default Hero