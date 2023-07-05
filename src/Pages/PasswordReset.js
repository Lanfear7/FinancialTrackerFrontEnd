import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import PasswordRestRequest from '../Components/Account/PasswordReset/PasswordRestRequest'
import { useSearchParams } from 'react-router-dom';
import ResetPassword from '../Components/Account/PasswordReset/ResetPassword';

function PasswordReset() {
  const [searchParams, setSearchParams] = useSearchParams();
  let token = searchParams.get("token")
  let id = searchParams.get("id")
  return (
    <>
    <NavBar />
    <div className='h-screen flex justify-center items-center bg-FTblack'>
      {token || id ? ResetPassword() : PasswordRestRequest()}
    </div>
    </>
  )




}

export default PasswordReset