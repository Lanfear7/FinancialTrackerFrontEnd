import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import axios from 'axios'

function SignInUp() {

    function SignUpDisplay(){
        const [userName, setUserName] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [confirmPassword, setConfirmPassword] = useState('')

        function SignUp(){
            console.log('first')
            axios.post('https://localhost:44320/api/User/Register', {
                Username : userName,
                Email : email,
                Password : password,
                ConfirmPassword : confirmPassword
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }

        return (
            <div className='bg-FTblack min-h-screen w-full flex flex-wrap justify-center items-center'>
                <div className='bg-FTgray w-11/12 h-full'>
                    <h1 className='text-center mt-5 text-lg text-FTwhite'>Get started with a free account!</h1>
                    <form className='h-[400px] p-10 flex flex-wrap justify-center'>
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
                            <input className='px-8 py-1 bg-FTgreen rounded-lg text-FTblack' type='button' value='SignUp' onClick={()=>SignUp()}></input>
                        </div>  
                    </form>
                </div>
            </div>
        )
    }

    function LogInDisplay(){
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [error, setError] = useState()
        function LogIn(){
            console.log('sese')
            axios.post('https://localhost:44320/api/User/Login', {
                Email : email,
                Password : password,
              })
              .then(function (response) {
                setError()
                console.log(response);
              })
              .catch(function (error) {
                console.log(error.response.data);
                if(typeof error.response.data !== 'object'){
                    setError(error.response.data) 
                }
              });
        }

        return (
            <div className='bg-FTblack min-h-screen w-full flex flex-wrap justify-center items-center'>
                <div className='bg-FTgray w-11/12 h-[450px]'>
                    <h1 className='text-center my-5 text-lg text-FTwhite'>Welcome back!</h1>
                    <form className='h-[300px] px-10 flex flex-wrap'>
                        <input className='h-10 rounded-md' placeholder='Email' type='text' onChange={(e)=>setEmail(e.target.value)}></input>
                        <input className='h-10 rounded-md' placeholder='Password' type='password' onChange={(e)=>setPassword(e.target.value)}></input>
                        <div className='basis-full h-14' >
                            <input className='px-8 py-1 bg-FTgreen rounded-lg text-FTblack' type='button' value='LogIn' onClick={()=>LogIn()}></input>
                        </div> 
                    </form>
                    {
                        error && <h1 className='px-10 text-red-600 text-xl'>{error}!</h1>
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