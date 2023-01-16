import React, { useState } from 'react'
import Logo from '../Images/DriftLogo.png'
import { VscMenu } from 'react-icons/vsc'
import { AiOutlineClose } from 'react-icons/ai'

function NavBar() {

    const [sideNav, setSideNav] = useState(false)

  return (
    <nav className='bg-FTwhite w-full h-24 flex items-center'>
        <figure className='m-0 w-24 h-full'>
            <img className='w-full h-full object-cover' src={Logo}></img>
        </figure>
        <h1 className='text-FTgray text-2xl'>Drift Finances</h1>
        <div className='absolute top-5 right-5 h-7 w-7' onClick={()=>setSideNav(true)}>
            <VscMenu className='h-full w-full' />
        </div>

        {
            sideNav &&
            <div className='absolute top-0 right-0 h-screen w-full bg-FTblack flex flex-wrap justify-end md:w-1/3 lg:w-1/4'>
                <AiOutlineClose className=' mr-3 mt-3 w-6 h-6 bg-red-500 rounded z-20' onClick={()=>{setSideNav(false)}}/>
                <ul className='absolute h-full w-full flex justify-evenly flex-wrap'>
                    <li className='basis-full flex items-center justify-center text-FTgreen text-2xl border-b border-FTgray hover:bg-FTgray'>Dashboard</li>
                    <li className='basis-full flex items-center justify-center text-FTgreen text-2xl border-b border-FTgray hover:bg-FTgray'>SignIn</li>
                    <li className='basis-full flex items-center justify-center text-FTgreen text-2xl border-b border-FTgray hover:bg-FTgray'>SignUp</li>
                </ul>
            </div>
        }
    </nav>
  )
}

export default NavBar