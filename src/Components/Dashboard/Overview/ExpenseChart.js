import React from 'react'
import { Chart } from "react-google-charts";

function ExpenseChart() {

    
    const chartOptions = {
        title: "Expenses Breakdown",
        is3D: true,
        backgroundColor: '#232931',
        legendTextStyle: { color: '#EAEAEA' },
        titleTextStyle: { color: '#EAEAEA' },
      };
    
      const data = [
        ["Expense", "Expenses Per Month"],
        ["Transportation", 0.1],
      ];

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