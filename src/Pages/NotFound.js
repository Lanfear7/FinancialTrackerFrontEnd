import React from 'react'
import NavBar from '../Components/NavBar'

function NotFound() {
  return (
    <div className='h-screen bg-FTblack flex flex-wrap justify-center'>
      <NavBar />
      <h1 className='text-FTwhite text-2xl'>404 | Sorry page was not found</h1>
    </div>
  )
}

export default NotFound