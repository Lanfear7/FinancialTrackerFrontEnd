import React,{useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

function PasswordRestRequest() {
    const [email, setEmail] = useState('')
    const [sendEmail, setSendEmail] = useState(false)

    function requestPasswordReset(){
        axios.post("https://localhost:44320/api/User/CreatePasswordResetToken", {
          email: email
        }).then(res => {
            if(res.status == 200){
                setSendEmail(true)
            }
        }).catch(error => console.log(error))
      }
      return(
        <div className='w-11/12 sm:w-1/2 md:w-1/3 bg-FTgray h-[400px] pt-16 rounded-sm'>
            {
                sendEmail?
                <>
                    <h1 className='text-center text-FTwhite text-2xl'>Email was sent to your mail box please find the reset link attached.</h1>
                </>
                :
                <>
                    <h1 className='text-center text-FTwhite text-2xl my-1'>Forgot Password?</h1>
                    <p className='text-center text-FTwhite my-2'>No worries,we'll send you reset instructions!</p>
                    <form className='flex flex-wrap justify-start'>
                    <input className='basis-3/4 m-auto h-7 rounded-sm' type='text' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email Address'></input>
                    <button className='px-8 w-3/4 py-1 m-auto bg-FTgreen rounded-lg text-FTblack hover:cursor-pointer hover:text-white my-3' onClick={(e)=>{ e.preventDefault();requestPasswordReset()}}>Continue</button>
                    <Link to='/Authentication/LogIn' className='basis-3/4 text-center m-auto text-FTwhite flex item-center justify-center'><FiArrowLeft className='mt-1'/>Back to login</Link>
                    </form>
                </>
                
            }
          
        </div>
      )
}

export default PasswordRestRequest