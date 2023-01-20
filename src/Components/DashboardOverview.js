import React, { useState } from 'react'
import { Chart } from "react-google-charts";
import { useSelector } from 'react-redux'

function DashboardOverview() {

    const [monthlyIncome, setMonthlyIncome] = useState(false);
    const [monthlySavings, setMonthlySavings] = useState(0.00);
  
    const {JWT} = useSelector((state) => state.User)
    const {user} = useSelector((state) =>state.User)
  
    console.log(user)
    console.log(JWT)
  
    const chartOptions = {
      title: "Expenses Breakdown",
      is3D: true,
      backgroundColor: '#232931',
      legendTextStyle: { color: '#EAEAEA' },
      titleTextStyle: { color: '#EAEAEA' },
    };
  
    const data = [
      ["Task", "Hours per Day"],
      ["Work", 11],
      ["Eat", 2],
      ["Commute", 2],
      ["Watch TV", 2],
      ["Sleep", 7],
    ];

  return (
    <div className='h-full border-b border-FTgreen pb-32 md:pb-16'>
          <div className='flex flex-wrap mt-6 justify-between lg:items-center h-[400px] lg:pl-16'>
            <div className='h-[200px] pl-6 w-[290px] flex flex-wrap md:h-full items-center'>
              <div className='text-FTwhite border-2 border-FTgreen bg-FTgray rounded-lg h-[75px] p-2 shadow-lg w-full md:h-[150px] flex flex-wrap items-center'>
                <h1 className='basis-full text-lg md:text-2xl'>Monthly Savings</h1>
                <h1>${monthlySavings.toFixed(2)}</h1>
              </div>
              <div className='text-FTwhite border-2 border-FTgreen bg-FTgray rounded-lg h-[75px] p-2 shadow-lg w-full md:h-[150px] flex flex-wrap items-center'>
                <h1 className='basis-full text-lg md:text-2xl'>Monthly Income</h1>
                {
                  monthlyIncome ? 
                    <h1>{}</h1>
                  :
                  <div className='flex justify-between w-full'>
                    <input type='text'></input>
                    <button className='bg-FTgreen text-FTblack px-3 rounded-md'>Enter</button>
                  </div>
                    
                }
              </div>
            </div>
            <div className='basis-full md:basis-1/2 h-[300px] w-[300px] md:h-[400px] sm:w-[300px] flex justify-center'>
              <Chart
              chartType="PieChart"
              data={data}
              options={chartOptions}
              width={"100%"}
              height={"100%"}
              />
            </div>
          </div>
        </div>
  )
}

export default DashboardOverview