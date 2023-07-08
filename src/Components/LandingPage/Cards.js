import React from 'react'
import SmallCoinStack from '../../Images/SmallCoinStack.png'
import PiggyBank from '../../Images/PiggyBank.png'
import MobileBanking from '../../Images/mobile_banking.png'

function Cards() {
  return (
    <div className='flex flex-wrap text-white mt-16 w-full md:mt-52 md:px-14'>
        <div className='md:basis-1/3 basis-11/12 flex flex-wrap justify-center mt-8 md:mt-0 m-auto'>
            <div className='bg-FTMediumPurple min-w-[280px] max-w-[350px] w-[90%] h-[350px] flex flex-wrap justify-center rounded-lg p-4 lg:pt-6 shadow-lg'>
               <figure className='max-w-[300px] flex justify-center items-center'>
                    <img className='h-[100px]' src={SmallCoinStack}></img>
                </figure>
                <div className='basis-full'>
                    <h1 className='text-5xl text-center mt-5 '>3</h1>
                    <p className='text-2xl text-center mt-5'>Easy Steps</p> 
                </div>
            </div>
        </div>
        <div className='md:basis-1/3 basis-11/12 flex flex-wrap justify-center mt-8 md:mt-0 m-auto'>
            <div className='bg-FTMediumPurple min-w-[280px] max-w-[350px] w-[90%] h-[350px] flex flex-wrap justify-center rounded-lg p-4 lg:pt-6 shadow-lg'>
                <figure className='max-w-[300px] h-[50%] flex justify-center items-center'>
                    <img className='h-full' src={MobileBanking}></img>
                </figure>
                <div className='basis-full'>
                    <h1 className='text-5xl text-center mt-5 '>1</h1>
                    <p className='text-2xl text-center mt-5'>Unified Platform</p> 
                </div> 
            </div>
        </div>
        <div className='md:basis-1/3 basis-11/12 flex flex-wrap justify-center mt-8 md:mt-0 m-auto'>
            <div className='bg-FTMediumPurple min-w-[280px] max-w-[350px] w-[90%] h-[350px] flex flex-wrap justify-center rounded-lg p-4 lg:pt-6 shadow-lg'>
                <figure className='max-w-[300px] h-[50%] flex justify-center items-center'>
                    <img className='h-full' src={PiggyBank}></img>
                </figure>
                <div className='basis-full'>
                    <h1 className='text-5xl text-center mt-5 '>100%</h1>
                    <p className='text-2xl text-center mt-5'>Finacial Controls</p> 
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Cards