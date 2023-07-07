import React from 'react'
import StackOfMoney from '../../Images/CoinStack.png'
import BarGraph from '../../Images/BarGraph.png'
function Hook() {
  return (
    <>
    <div className='flex flex-wrap mt-36 md:mt-80 items-center text-white w-full'>
      <div className='md:basis-1/2 px-2 pl-10 basis-full flex items-center text-4xl md:justify-start md:pl-40'>
        <figure className='min-w-[200px] max-w-[350px] h-[300px]'>
            <img className='h-full w-full' src={StackOfMoney}></img>
        </figure>
      </div>
        <div className='basis-full md:basis-1/2 flex justify-center mt-12 md:mt-0 px-10 md:justify-start md:pl-40'>
          <div className='md:basis-[450px]'>
            <h1 className='text-4xl'>Master Your Money & Achieve Your Financial Goals Faster</h1>
            <p className='text-lg mt-4'>Enjoy a sleek, user-friendly interface that simplifies tracking all your financial activities in one place. Leverage state-of-the-art analysis tools designed to grow your wealth by optimizing your budget and spending habits.</p>
          </div>
        </div>
    </div>
    <div className='flex flex-wrap mt-36 md:mt-80 items-center text-white w-full'>
        <div className='basis-full md:basis-1/2 flex md:justify-start md:pl-40 mt-12 md:mt-0'>
          <div className='md:basis-[450px]'>
            <h1 className='text-4xl'>Monitor Your Money & See Your Improvemtns</h1>
            <p className='text-lg mt-4'>Effortlessly monitor your monthly expenditures and look back on previous months to see how your spending patterns and money managemnt skills have improved.</p>
          </div>
        </div>
        <div className='md:basis-1/2 px-2 pr-10 basis-full flex items-center text-4xl md:justify-start md:pl-40'>
          <figure className='min-w-[200px] max-w-[350px] h-[300px]'>
            <img className='h-full w-full' src={BarGraph}></img>
          </figure>
        </div>
    </div>
    </>
    
    
  )
}

export default Hook