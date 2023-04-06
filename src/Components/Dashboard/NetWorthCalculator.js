import React, { useState } from 'react'

function NetWorthCalculator() {

    const [assets, setAssets] = useState(0)
    const [liabilities, setLiabilities] = useState(0)
    

  return (
    <div className='my-5 text-FTwhite ml-3'>
        <div>
            <h1 className='text-3xl'>Calculate your net worth</h1>
        </div>
        <div className='mt-5 md:flex md:flex-wrap-reverse'>
            <div className='md:basis-1/2 pl-2'>
                <h1 className='text-xl'>How to calculate your net worth, what is net worth?</h1>
                <p className='mt-2'>
                    Net worth refers to the total value of an individual's assets (what they own) minus their liabilities (what they owe). In other words, it is the difference between a person's total assets and their total debts.
                    <br />
                    <br />
                    Assets can include things like cash, investments, real estate, vehicles, and personal property. Liabilities can include things like mortgages, loans, credit card debt, and other financial obligations.
                    <br />
                    <br />
                    Calculating your net worth can give you an idea of your overall financial health and help you set financial goals. A positive net worth means you have more assets than liabilities, while a negative net worth means you owe more than you own.
                </p>
            </div>
            
            <div className='md:basis-1/2 mt-10 md:mt-0 md:pl-7 flex justify-center md:relative '>
                <div className='w-[90%] max-w-[500px] h-[375px] bg-FTgray rounded-lg pt-7 shadow-lg  '>
                    <div className='w-[300px] h-[150px] flex flex-wrap justify-center md:h-[100px] md:justify-between md:px-3 md:w-full mx-auto'>
                        <div>
                            <h1>Assets</h1>
                            <input type='text' className='text-black' onChange={(e)=>setAssets(e.target.value)} ></input>
                        </div>
                        <h1 className='align-center relative md:top-3 md:basis-0 basis-[60%] text-center text-3xl'>-</h1>
                        <div>
                            <h1>Liabilities</h1>
                            <input type='text' className='text-black' onChange={(e)=>setLiabilities(e.target.value)}></input>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='mt-10 md:mt-5 w-32 h-10 bg-FTgreen rounded-lg' onClick={()=>calculateNetWorth()}>Calculate</button>
                    </div>
                    <div className='h-[50px] mt-12 text-center'>
                        {

                        }
                      <h1>Your net worth is $10,000</h1>  
                    </div>
                </div>
            </div>
        </div>
    </div>
  )

    function calculateNetWorth(){
        //data check to see if assets and liabilities is a number
        let netWorth = assets - liabilities
        console.log(netWorth)
    }
}

export default NetWorthCalculator