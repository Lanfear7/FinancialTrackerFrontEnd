import axios from 'axios';
import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import ExpenseChart from './Dashboard/Overview/ExpenseChart';
import OverviewCards from './Dashboard/Overview/OverviewCards';
import ExpenseBreakdown from './Dashboard/Overview/ExpenseBreakdown';

function DashboardOverview() {

  return (
    <div className='h-full border-b border-FTgreen pb-32 md:pb-16'>
      <OverviewCards />
      <div className='flex flex-wrap mt-10 pl-2'>
        <ExpenseBreakdown />
        <ExpenseChart />
      </div>
    </div>
  )

  

}



export default DashboardOverview