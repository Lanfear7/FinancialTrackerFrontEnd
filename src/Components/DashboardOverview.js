import axios from 'axios';
import React, { useState } from 'react'
import { Chart } from "react-google-charts";
import { useSelector } from 'react-redux'

function DashboardOverview() {


  



    const [monthlyIncome, setMonthlyIncome] = useState(0);
    const [monthlySavings, setMonthlySavings] = useState(0.00);
  
    const {JWT} = useSelector((state) => state.User)
    const {user} = useSelector((state) =>state.User)


    const chartOptions = {
      title: "Expenses Breakdown",
      is3D: true,
      backgroundColor: '#232931',
      legendTextStyle: { color: '#EAEAEA' },
      titleTextStyle: { color: '#EAEAEA' },
    };
  
    const data = [
      ["Expense", "Expenses Per Month"],
      ["Transportation", 1200],
      ["Food", 500],
      ["Entertainment", 150],
      ["Bills", 900],
      ["other", 300],
      ["Savings", 250]
    ];

  return (
    <div className='h-full border-b border-FTgreen pb-32 md:pb-16'>
          <div className='flex flex-wrap mt-6 justify-between md:justify-between lg:items-center h-[500px] lg:px-16'>
            <div className='h-[350px] w-[290px] md:w-[350px] flex flex-wrap md:h-full items-center'>
              <div className='text-FTwhite border-2 border-FTgreen bg-FTgray rounded-lg h-[85px] p-2 shadow-lg w-full md:h-[150px] flex flex-wrap items-center'>
                <h1 className='basis-full text-lg md:text-2xl'>Monthly Savings</h1>
                <h1 className='md:pl-5 text-2xl'>${monthlySavings.toFixed(2)}</h1>
              </div>
              <div className='text-FTwhite border-2 border-FTgreen bg-FTgray rounded-lg h-[85px] p-2 shadow-lg w-full md:h-[150px] flex flex-wrap items-center'>
                <h1 className='basis-full text-lg md:text-2xl'>Monthly Income</h1>
                {
                  user.monthlyIncome ?
                    <div className='flex justify-start w-full'>
                      <h1 className='text-2xl md:pl-5'>${user.monthlyIncome}</h1>
                    </div>
                  :
                    <div className='flex justify-evenly w-full'>
                      <input type='text' className='bg-FTgray border-b border-FTgreen' placeholder='Enter Monthly Income' onChange={(e)=> setMonthlyIncome(e.target.value)}></input>
                      <button className='bg-FTgreen text-FTblack px-3 rounded-md' onClick={()=> UpdateIncome()}>Enter</button>
                    </div>
                }
              </div>
              <div className='text-FTwhite border-2 border-FTgreen bg-FTgray rounded-lg h-[135px] p-2 shadow-lg w-full md:h-[150px] flex flex-wrap items-center'>
                <h1 className='basis-full text-lg md:text-2xl'>Expense</h1>
                <div className='flex flex-wrap justify-evenly w-full'>
                  <input type='text' className='bg-FTgray border-b border-FTgreen basis-[80%]' placeholder='Enter Expense'></input>
                  <input type='text' className='bg-FTgray border-b border-FTgreen basis-[80%]' placeholder='Enter Cost'></input>
                  <button className='bg-FTgreen text-FTblack px-3 rounded-md basis-[25%] mt-3'>Enter</button>
                </div>
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

  function UpdateIncome()
  {
    const config = {
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JWT}`, 
      }
    };

    const bodyParameters = {
       Income: monthlyIncome
    };

    axios.post(`https://localhost:44320/api/Dashboard/CurrentUser/UpdateIncome/${user['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']}`,
    bodyParameters,
    config
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

}



export default DashboardOverview