import React, { useState } from 'react'

import NavBar from '../Components/NavBar'

import DashboardOverview from '../Components/DashboardOverview';


function Dashboard() {

  return (
    <div className='bg-FTblack min-h-screen'>
        <NavBar />
        <DashboardOverview />
        
    </div>
  )
}

export default Dashboard