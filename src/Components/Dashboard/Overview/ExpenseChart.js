import React, { useEffect } from 'react'
import { Chart } from "react-google-charts";
import { useDispatch, useSelector } from 'react-redux';
import { updateMonthlySavings } from '../../../Redux/Slices/userSlice'


function ExpenseChart() {

  const { expenses } = useSelector((state) => state.Expenses)
  const { trackers } = useSelector((state) => state.Tracker)
  const { monthlyIncome } = useSelector((state) => state.User)

  const dispatch = useDispatch()

  const chartOptions = {
      title: "Expenses Breakdown",
      is3D: true,
      backgroundColor: '#232931',
      legendTextStyle: { color: '#EAEAEA' },
      titleTextStyle: { color: '#EAEAEA' },
    };
  
  let expenseTotal = 0
  if(expenses.length > 0){
    expenses.forEach(expense => {
      expenseTotal += expense.value
    });
  }

  let data = [
    ["Expense", "Expenses Per Month"],
    ["Untracked Expenses", expenseTotal]
  ];

  let trackerTotal = 0
  trackers.forEach(tracker => {
    let trackerAmount = 0
    if(tracker.tracker.transactions != null){
      tracker.tracker.transactions['$values'].forEach(value =>{
        trackerAmount += value.amount
      })
    }
    trackerTotal += trackerAmount
    const trackerData = [tracker.tracker.name, trackerAmount]
    data.push(trackerData)
  })

  useEffect(()=>{
    let totalExpensesAndTrackersSpent =  expenseTotal + trackerTotal
    dispatch(updateMonthlySavings(monthlyIncome - totalExpensesAndTrackersSpent))
  },[expenses, trackers, monthlyIncome])

  return (
    <div className='mt-6 lg:items-center h-[300px] lg:px-16 w-full sm:w-[500px] md:w-1/2'>
        <Chart
        chartType="PieChart"
        data={data}
        options={chartOptions}
        width={"100%"}
        height={"100%"}
        />
    </div>
  )
}

export default ExpenseChart