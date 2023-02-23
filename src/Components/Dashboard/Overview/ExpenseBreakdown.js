import React from 'react'
import { useState } from 'react'

function ExpenseBreakdown() {

  const [expenses, setExpenses] = useState([2])

  //query api for Expenses 

  return (
    <div className='basis-full mx-2 h-[345px] md:basis-5/12 lg:basis-[600px]'>
      <div className='border border-FTgreen rounded-lg px-5 py-5 md:px-10 md:m-0'>
        <h1 className='text-FTwhite text-xl'>Expense Breakdown</h1>
        <div className='h-[250px] mt-[15px] bg-FTgray overflow-y-scroll px-2 '>
        {
          expenses.length > 0 ?
          <table className='w-full table-auto text-FTwhite '>
            <thead className='border-b border-FTblack'>
              <th className='w-[100px] py-2'>Date</th>
              <th className='w-[100px] py-2'>Expense</th>
              <th className='w-[100px] py-2'>Cost</th>
            </thead>
            <tbody>
              <tr className='hover:bg-FTgreen hover:text-FTblack hover:cursor-pointer'>
                <td className='text-center'>2021-06-13</td>
                <td className='text-center'>Welder</td>
                <td className='text-center'>$1500</td>
              </tr>
            </tbody>
          </table>
          :
          <div className='h-full w-full flex justify-center items-center'>
            <h1 className='text-FTwhite text-lg'>No Extra Expenses...</h1>
          </div>
        }
        </div>
      </div>
      
    </div>
  )
}

export default ExpenseBreakdown