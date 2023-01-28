import React, { useState } from 'react'

import NavBar from '../Components/NavBar'

import DashboardOverview from '../Components/DashboardOverview';
import DashboardTracker from '../Components/DashboardTracker';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { currentUserData } from '../Redux/Slices/userSlice';
import { useEffect } from 'react';


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
      if(res.data){
        const user = res.data[0]
        console.log(user)
        dispatch(currentUserData(user))
        return
      }
      console.log('something went wrong not data')
    }).catch((error)=>{
      console.log(error)
    })
  },[])

  


  return (
    <div className='bg-FTblack min-h-screen'>
        <NavBar />
        <DashboardOverview />
        <DashboardTracker />
    </div>
  )
}

export default Dashboard