import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import axios from 'axios'

import { useDispatch } from 'react-redux'
import { addUser, currentUserData } from '../Redux/Slices/userSlice'
import { useNavigate } from 'react-router-dom';

function SignInUp() {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    function parseJwt(token){
        try {
          return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
          return null;
        }
      };

    function SignUpDisplay(){
        const [userName, setUserName] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [confirmPassword, setConfirmPassword] = useState('')
        const [error, setError] = useState('')

        function SignUp(){
            setError('Loading')
            if(userName === '' || email === '' || password === '' || confirmPassword === ''){
                setError('Please fill every requirement')
                return
            }
            if(password !== confirmPassword){
                setError('Please make sure both passwords match')
                return
            }
            axios.post('https://localhost:44320/api/User/Register', {
                Username : userName,
                Email : email,
                Password : password,
                ConfirmPassword : confirmPassword
              })
              .then(function (response) {
                dispatch(addUser(response.data))
                setError('')
                navigate('/Dashboard')
              })
              .catch(function (error) {
                console.log(error);
                if(error.response.data){
                    setError(error.response.data)
                    return
                }
                setError("Can not create new user, please try again later.")
              });
        }

        return (
            <div className='bg-FTblack min-h-screen w-full flex flex-wrap justify-center items-center'>
                <div className='bg-FTgray w-11/12 h-[500px] md:w-1/2'>
                    <h1 className='text-center mt-5 text-lg text-FTwhite'>Get started with a free account!</h1>
                    <form className='h-[400px] p-10 pb-0 flex flex-wrap justify-center'>
                        <div className='basis-full flex justify-center'>
                            <input className='h-10 rounded-md w-full md:w-1/2' placeholder='Username' type='text' onChange={(e)=>setUserName(e.target.value)}></input>
                        </div>
                        <div className='basis-full flex justify-center'>
                            <input className='h-10 rounded-md w-full md:w-1/2' placeholder='Email' type='text' onChange={(e)=>setEmail(e.target.value)}></input>
                        </div>
                        <div className='basis-full flex justify-center'>
                            <input className='h-10 rounded-md w-full md:w-1/2' placeholder='Password' type='password' onChange={(e)=>setPassword(e.target.value)}></input>
                        </div>
                        <div className='basis-full flex justify-center'>
                            <input className='h-10 rounded-md w-full md:w-1/2' placeholder='Confirm Password' type='password' onChange={(e)=>setConfirmPassword(e.target.value)}></input>
                        </div>
                        <div className='basis-full text-center' >
                            <input className='px-8 py-1 bg-FTgreen rounded-lg text-FTblack hover:cursor-pointer' type='button' value='SignUp' onClick={()=>SignUp()}></input>
                        </div>  
                    </form>
                    {
                        error == "Loading" ? <h1 className='px-10 text-FTwhite text-xl text-center'>{error}...</h1> : <h1 className='px-10 text-red-600 text-xl text-center'>{error}</h1>
                    } 
                </div>
            </div>
        )
    }

    function LogInDisplay(){
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [error, setError] = useState()

        function LogIn(){
            setError('Loading')
            axios.post('https://localhost:44320/api/User/Login', {
                Email : email,
                Password : password,
              })
              .then(function (response) {
                setError()
                if(response.data){
                    dispatch(addUser(response.data))
                    navigate('/Dashboard')
                }
              })
              .catch(function (error) {
                console.log(error)
                if(typeof error.response.data !== 'object'){
                    if(error.response.status == 500){
                        setError('Server Error Try Again Later.')
                        return
                    }
                    setError(error.response.data) 
                }
              });
        }
        return (
            <div className='bg-FTblack min-h-screen w-full flex flex-wrap justify-center items-center'>
                <div className='bg-FTgray w-11/12 h-[450px] md:w-1/2' >
                    <h1 className='text-center my-5 text-lg text-FTwhite'>Welcome back!</h1>
                    <form className='h-[250px] px-10 flex flex-wrap mt-16'>
                        <div className='basis-full flex justify-center'>
                            <input className='h-10 rounded-md w-full md:w-1/2' placeholder='Email' type='text' onChange={(e)=>setEmail(e.target.value)}></input>
                        </div>
                        <div className='basis-full flex justify-center'>
                            <input className='h-10 rounded-md w-full md:w-1/2' placeholder='Password' type='password' onChange={(e)=>setPassword(e.target.value)}></input>
                        </div>
                        <div className='basis-full h-14 text-center' >
                            <input className='px-8 py-1 bg-FTgreen rounded-lg text-FTblack hover:cursor-pointer' type='button' value='LogIn' onClick={()=>LogIn()}></input>
                        </div> 
                    </form>
                    {
                        error == "Loading" ? <h1 className='px-10 text-FTwhite text-xl text-center'>{error}...</h1> : <h1 className='px-10 text-red-600 text-xl text-center'>{error}</h1>
                    } 
                </div>
            </div>
        )
    }

  return (
    <>
        <NavBar className='basis-full'/>
        {
            window.location.pathname === "/Authentication/SignUp" &&
            <SignUpDisplay />
        }
        {
            window.location.pathname === "/Authentication/LogIn" &&
            <LogInDisplay />
        }
    </>
    
  )
}

export default SignInUp