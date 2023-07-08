import React from 'react'
import { Link } from 'react-router-dom'
import DriftLogo from '../../Images/DriftLogo.png'

function Footer() {
  return (
    <div className='bg-FTMediumPurple w-full mt-40 h-full flex justify-center pt-5'>
        <div className='basis-1/2'>
            <figure className='h-[150px] w-[150px] ml-16'>
                <img src={DriftLogo}></img>
            </figure>
        </div>
        <ul className='basis-1/2'>
            <li className='text-FTwhite text-2xl'><Link className='mt-4' to='/Authentication/LogIn'>LogIn</Link></li>
            <li className='text-FTwhite text-2xl mt-4'><Link className='' to='/Authentication/SignUp'>SignUp</Link></li>
        </ul>
    </div>
  )
}

export default Footer