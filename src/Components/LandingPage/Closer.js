import React from 'react'
import {Link} from 'react-router-dom'

function Closer() {
  return (
    <div className='h-full w-full mt-24 md:px-14 '>
        <h1 className='text-4xl text-white h-full mb-10'>Ready to take control of your finances?<br></br> It's time to join the Drift!</h1>
        <Link to={'/Authentication/SignUp'} className='bg-FTgreen text-FTwhite p-2 px-7 text-xl rounded-3xl ml-9'>Get Started <b>&gt;</b></Link>
    </div>
  )
}

export default Closer