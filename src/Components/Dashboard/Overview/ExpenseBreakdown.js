import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function ExpenseBreakdown() {

  const [expenses, setExpenses] = useState([2])

  const {user, JWT} = useSelector((state) => state.User)

  //query api for Expenses GET all expenses
  const config = {
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JWT}`, 
    }
  };
  useEffect(()=>{
    if(!user){
      return
    }
    axios.get(`https://localhost:44320/api/Dashboard/CurrentUser/Expenses/GetAll/${user.id}`,config)
    .then((res)=>{
      let expenseArray = res.data['$values']
      setExpenses(expenseArray)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[user])

  return (
    <div className='basis-full mx-2 h-[345px] md:basis-5/12 lg:basis-[600px]'>
      <div className='border border-FTgreen rounded-lg px-5 py-5 md:px-6 md:m-0'>
        <h1 className='text-FTwhite text-xl'>Expense Breakdown</h1>
        <div className='h-[250px] mt-[15px] bg-FTgray overflow-y-scroll px-2 '>
        {
          expenses.length > 0 ?
          <table className='w-full table-auto text-FTwhite'>
          <thead className='border-b border-FTblack'>
            <th className='w-[100px] py-2'>Date</th>
            <th className='w-[100px] py-2'>Expense</th>
            <th className='w-[100px] py-2'>Cost</th>
            <th className='w-[30px] py-2'>Delete</th>
          </thead>
          {

            expenses.map((item, i) => {
              console.log(item)
              return(
                <tbody>
                  <tr className='hover:bg-FTgreen hover:text-FTblack hover:cursor-pointer'>
                    <td className='text-center'>{item.dateTime.slice(0,10)}</td>
                    <td className='text-center'>{item.expenseName}</td>
                    <td className='text-center'>{item.value}</td>
                    <td className='text-center' onClick={()=>deleteExpense()}>X</td>
                  </tr>
                </tbody>
              )
            })
          }
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

function deleteExpense(){
  console.log('delete')
}

export default ExpenseBreakdown