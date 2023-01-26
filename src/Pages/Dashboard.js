import React, { useState } from 'react'

import NavBar from '../Components/NavBar'

import DashboardOverview from '../Components/DashboardOverview';
import DashboardTracker from '../Components/DashboardTracker';


function Dashboard() {

  return (
    <div className='bg-FTblack min-h-screen'>
        <NavBar />
        <DashboardOverview />
        <DashboardTracker />
    </div>
  )
}

export default Dashboard