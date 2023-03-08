import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeExpenseToggle } from '../../../Redux/Slices/expensesSlice'

function ExpenseBreakdown() {

  const [expenses, setExpenses] = useState([])

  const {user, JWT} = useSelector((state) => state.User)
  const { expensesToggle } = useSelector((state) =>state.Expenses)
  const dispatch = useDispatch()

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
  },[user,expensesToggle])

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
            <tbody>
            {
              expenses.map((item, i) => {
                return(
                  <tr key={i} className='hover:bg-FTgreen hover:text-FTblack hover:cursor-pointer'>
                    {
                      item.dateTime &&
                      <td className='text-center'>{item.dateTime.slice(0,10)}</td>
                    }
                    <td className='text-center'>{item.expenseName}</td>
                    <td className='text-center'>${item.value}</td>
                    <td className='text-center' onClick={()=>deleteExpense(item.id)}>X</td>
                  </tr>
                )
              })
            }
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
  function deleteExpense(id){
    console.log('delete', id)
    axios.delete(`https://localhost:44320/api/Dashboard/CurrentUser/Expenses/Delete/${id}`,config)
    .then((res)=>{
      if(res.status == 200){
        //edit GS fro Expenses
        console.log(res)
        dispatch(changeExpenseToggle(!expensesToggle))
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }
}



export default ExpenseBreakdown