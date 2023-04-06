import React from 'react'
import ExpenseChart from './Dashboard/Overview/ExpenseChart';
import OverviewCards from './Dashboard/Overview/OverviewCards';
import ExpenseBreakdown from './Dashboard/Overview/ExpenseBreakdown';
import { useSelector } from 'react-redux';

function DashboardOverview() {

  const {user} = useSelector((state)=> state.User)

  return (
    <div className='h-full border-b border-FTgreen pb-32 md:pb-16'>
      {
        user &&
        <div className='w-full h-full'>
          <h1 className='text-FTwhite text-3xl top-4 sm:left-12 relative'>Welcome Back {user.user_Name.charAt(0).toUpperCase()+ user.user_Name.slice(1)}!</h1>
        </div>
      }
      
      <OverviewCards />
      <div className='flex flex-wrap mt-10 justify-between'>
        <ExpenseBreakdown />
        <ExpenseChart />
      </div>
    </div>
  )

  

}



export default DashboardOverview