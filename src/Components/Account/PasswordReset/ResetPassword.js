import axios from 'axios';
import React,{useState} from 'react'
import { Link, useSearchParams } from 'react-router-dom';

function ResetPassword(){
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [error, setError] = useState()
  const [passwordResetToggle, setPasswordResetToggle] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams();
  let token = searchParams.get("token")
  let id = searchParams.get("id")


  function sendUpdateRequest(){
    if(password !== confirmPassword){
      setError("Password must match")
    }
    axios.post("https://localhost:44320/api/User/UpdateUserPassword",
    {
      "token":token,
      "id":id,
      "password": password,
      "confirmPassword": confirmPassword
    }).then(res=>{
      if(res.status == 200){
        setPasswordResetToggle(true)
      }
      if(res.status == 400){
        setError(res.data)
      }
    }).catch(error=> console.log(error))
  }
  
    return(
      <div className='w-11/12 sm:w-1/2 md:w-1/3 bg-FTgray h-[400px] pt-16 rounded-sm'>
        {
          passwordResetToggle?
          <>
            <h1 className='text-center text-FTwhite text-2xl my-1'>Password has been updated!</h1>
            <h1 className='text-center text-FTwhite text-2xl my-1'>Click <Link to={"/Authentication/LogIn"} className='m2 text-FTgreen border-b border-FTgreen'>here</Link> to login</h1>
          </> 
          :
          <>
            <h1 className='text-center text-FTwhite text-2xl my-1'>Create New Password?</h1>
            <p className='text-center text-FTwhite my-2'>Strong passwords include numbers, letters, and special characters </p>
            <h1>{error}</h1>
            <form className='flex flex-wrap justify-start mt-5'>
              <input className='basis-3/4 m-auto mt-2 h-7 rounded-sm' type='text' placeholder='Enter new password' onChange={(e)=>{setPassword(e.target.value)}}></input>
              <input className='basis-3/4 m-auto mt-7 h-7 rounded-sm' type='text' placeholder='Confirm your password' onChange={(e)=>{setConfirmPassword(e.target.value)}}></input>
              <button className='px-8 w-3/4 py-1 m-auto mt-7 bg-FTgreen rounded-lg text-FTblack hover:cursor-pointer hover:text-white my-3' onClick={(e)=>{e.preventDefault();sendUpdateRequest()}}>Reset password</button>
            </form>
          </>
        }
        
      </div>
    )
  }

export default ResetPassword