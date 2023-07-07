import React from 'react'

function About() {
  return (
    <div className='flex flex-wrap text-white mt-16 md:mt-56 md:h-28 h-full pl-10 w-full'>
        <div className='basis-full md:basis-1/2 flex items-center text-4xl md:justify-start md:pl-40'>
           <h1>Revolutionize <br></br> Your Finances</h1> 
        </div>
        <div className='md:basis-1/2 flex justify-center md:items-center pr-2 sm:pr-24 md:pr-0 mt-12 md:mt-0 md:justify-start'>
             <p className='md:basis-[450px] text-lg'>Welcome to Drift Finance, where we transform your financial life by tracking your income, expenses, and savings to help you achieve your financial goals!</p>
        </div>

    </div>
  )
}

export default About