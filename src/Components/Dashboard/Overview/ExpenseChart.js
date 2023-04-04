import React from 'react'
import { Chart } from "react-google-charts";
import { useSelector } from 'react-redux';

function ExpenseChart() {

  const {expenses} = useSelector((state) => state.Expenses)
  const {trackers} = useSelector((state) => state.Tracker)

  const chartOptions = {
      title: "Expenses Breakdown",
      is3D: true,
      backgroundColor: '#232931',
      legendTextStyle: { color: '#EAEAEA' },
      titleTextStyle: { color: '#EAEAEA' },
    };
  
  console.log(expenses, trackers)

  let expenseTotal = 0
  console.log(expenses)
  if(expenses.length > 0){
    expenses.forEach(expense => {
      expenseTotal += expense.value
    });
  }

  console.log(expenseTotal)
  let data = [
    ["Expense", "Expenses Per Month"],
    ["Untracked Expenses", expenseTotal]
  ];

  trackers.forEach(tracker => {
    let trackerAmount = 0
    if(tracker.tracker.transactions['$values']){
      tracker.tracker.transactions['$values'].forEach(value =>{
        trackerAmount += value.amount
      })
    }
    const trackerData = [tracker.tracker.name, trackerAmount]
    data.push(trackerData)
  })

  console.log(data)

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