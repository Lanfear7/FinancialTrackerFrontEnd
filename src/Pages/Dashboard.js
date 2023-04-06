import React from 'react'

import NavBar from '../Components/NavBar'

import DashboardOverview from '../Components/DashboardOverview';
import DashboardTracker from '../Components/DashboardTracker';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { currentUserData, updateMonthlyIncome } from '../Redux/Slices/userSlice';
import { useEffect } from 'react';
import NetWorthCalculator from '../Components/Dashboard/NetWorthCalculator';


function Dashboard() {
  const { JWT } = useSelector((state) =>state.User)

  const dispatch = useDispatch()

  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  let parsedData = parseJwt(JWT)
  const id = parsedData['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']

  let config = {
    headers: { Authorization: `Bearer ${JWT}` }
  }

  useEffect(()=>{
    axios.get(`https://localhost:44320/api/Dashboard/CurrentUser/${id}`,
    config
    ).then((res)=>{
      if(res.data['$values']){
        const user = res.data['$values']
        dispatch(updateMonthlyIncome(user[0].monthlyIncome))
        dispatch(currentUserData(user[0]))
        return
      }
      console.log('something went wrong no data')
    }).catch((error)=>{
      console.log(error)
    })
  },[])

  


  return (
    <div className='bg-FTblack min-h-screen overflow-x-hidden'>
        <NavBar />
        <DashboardOverview />
        <DashboardTracker />
        <NetWorthCalculator />
    </div>
  )
}

export default Dashboard