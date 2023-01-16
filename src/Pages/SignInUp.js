import React from 'react'
import NavBar from '../Components/NavBar'

function SignInUp() {

    function SignUp(){
        return (
            <div className='bg-FTblack min-h-screen w-full flex flex-wrap justify-center items-center'>
                <div className='bg-FTgray w-11/12 h-full'>
                    <h1 className='text-center mt-5 text-lg text-FTwhite'>Get started with a free account!</h1>
                    <form className='h-[400px] p-10 flex flex-wrap'>
                        <input className='h-10 rounded-md' placeholder='Username' type='text'></input>
                        <input className='h-10 rounded-md' placeholder='Email' type='text'></input>
                        <input className='h-10 rounded-md' placeholder='Password' type='password'></input>
                        <input className='h-10 rounded-md' placeholder='Confirm Password' type='password'></input>
                        <div className='basis-full' >
                            <input className='px-8 py-1 bg-FTgreen rounded-lg text-FTblack' type='button' value='SignUp'></input>
                        </div>  
                    </form>
                </div>
            </div>
        )
    }

    function LogIn(){
        return (
            <div className='bg-FTblack min-h-screen w-full flex flex-wrap justify-center items-center'>
                <div className='bg-FTgray w-11/12 h-full'>
                    <h1 className='text-center mt-5 text-lg text-FTwhite'>Welcome back!</h1>
                    <form className='h-[400px] p-10 flex flex-wrap'>
                        <input className='h-10 rounded-md' placeholder='Username' type='text'></input>
                        <input className='h-10 rounded-md' placeholder='Password' type='password'></input>
                        <div className='basis-full' >
                            <input className='px-8 py-1 bg-FTgreen rounded-lg text-FTblack' type='button' value='LogIn'></input>
                        </div>  
                    </form>
                </div>
            </div>
        )
    }

  return (
    <>
        <NavBar className='basis-full'/>
        {
            window.location.pathname == "/Authentication/SignUp" &&
            <SignUp />
        }
        {
            window.location.pathname == "/Authentication/LogIn" &&
            <LogIn />
        }
    </>
    
  )
}

export default SignInUp