import React from 'react'
import { useSelector } from 'react-redux'
import NavBar from '../Components/NavBar'


function Dashboard() {

  const {JWT} = useSelector((state) => state.User)
  const {user} = useSelector((state) =>state.User)

  console.log(user)
  console.log(JWT)

  return (
    <div className='bg-FTblack min-h-screen'>
        <NavBar />
    </div>
  )
}

export default Dashboard