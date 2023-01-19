import React, { useState , useEffect } from 'react'
import Logo from '../Images/DriftLogo.png'
import { VscMenu } from 'react-icons/vsc'
import { AiOutlineClose } from 'react-icons/ai'
import { Link, redirect, Router  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from '../Redux/Slices/userSlice'
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const [sideNav, setSideNav] = useState(false)
    const { height, width } = useWindowDimensions();
    const {user} = useSelector((state) => state.User)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    function LogOut(){
      dispatch(removeUser())
      return navigate('/')
    }

  return (
    <nav className='bg-FTwhite w-full h-24 flex items-center'>
      {
        user.length > 0 ?
        <Link to="/Dashboard">
          <figure className='m-0 w-24 h-full'>
              <img className='w-full h-full object-cover' src={Logo}></img>
          </figure>
        </Link>
        :
        <Link to="/">
          <figure className='m-0 w-24 h-full'>
              <img className='w-full h-full object-cover' src={Logo}></img>
          </figure>
        </Link>
      }
        <h1 className='text-FTgray text-2xl'>Drift Finances</h1>
        {
            width < 900 &&
            <>
            <div className='absolute top-5 right-5 h-7 w-7' onClick={()=>setSideNav(true)}>
                <VscMenu className='h-full w-full' />
            </div>
            {
              sideNav &&
              <div className='absolute top-0 right-0 h-screen w-full bg-FTblack flex flex-wrap justify-end md:w-2/4 z-30'>
                  <AiOutlineClose className=' mr-3 mt-3 w-6 h-6 bg-red-500 rounded z-20' onClick={()=>{setSideNav(false)}}/>
                  <ul className='absolute h-full w-full flex justify-evenly flex-wrap'>
                    {
                      user.length  > 0 ?
                      <>
                        <Link className='basis-full border-b border-FTgray flex items-center justify-center' onClick={()=>{setSideNav(false)}} to='/Dashboard'><li className='text-FTgreen  text-2xl hover:bg-FTgray'>Dashboard</li></Link>
                        <div className='basis-full border-b border-FTgray flex items-center justify-center' onClick={()=>LogOut()}>
                          <li className='text-FTgreen text-2xl hover:bg-FTgray' >Logout</li>
                        </div>
                      </>
                      :
                      <>
                       <Link className='basis-full border-b border-FTgray flex items-center justify-center' onClick={()=>{setSideNav(false)}} to='/Authentication/LogIn'><li className='text-FTgreen text-2xl hover:bg-FTgray'>LogIn</li></Link>
                        <Link className='basis-full border-b border-FTgray flex items-center justify-center' onClick={()=>{setSideNav(false)}} to='/Authentication/SignUp'><li className='text-FTgreen text-2xl hover:bg-FTgray'>SignUp</li></Link>
                      </>
                    }
                     </ul>
              </div>
            }
            </>
        }
        {
          width > 900 &&
          <ul className='absolute top-0 right-10 flex justify-center w-72 h-24'>
            {
              user.length  > 0 ?
              <>
                <Link className='basis-full flex items-center justify-center' onClick={()=>{setSideNav(false)}} to='/Dashboard'><li className='text-FTgreen text-2xl '>Dashboard</li></Link>
               <div className='basis-full flex items-center justify-center'>
                <li className='text-FTgreen text-2xl' onClick={()=>LogOut()}>Logout</li>
                </div>
              </>
              :
              <>
               <Link className='basis-full flex items-center justify-center' onClick={()=>{setSideNav(false)}} to='/Authentication/LogIn'><li className='text-FTgreen text-2xl '>LogIn</li></Link>
                <Link className='basis-full flex items-center justify-center' onClick={()=>{setSideNav(false)}} to='/Authentication/SignUp'><li className='text-FTgreen text-2xl '>SignUp</li></Link>
              </>
            }
          </ul>
        }
        
    </nav>
  )
}



function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default NavBar