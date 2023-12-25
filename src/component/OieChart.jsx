import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Pie } from "react-chartjs-2";


export default function OieChart(props) {
  return (
    <div className='w-3/4 flex flex-col items-center gap-5'>
      <h1 className='text-4xl font-semibold'>Monthly Interese: <span className='text-blue-500'>$ {props.month}</span></h1>
      <Pie className=''  data ={ {
      labels: [
        'Principle',
        'Interest'
      ],
      datasets: [{
        label: 'Ratio of principal and Interest',
        data: [props.amount, props.intrest],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)'
        ],
        hoverOffset: 4,
        widtg: 50

      }]
    }}></Pie>
    </div>
  )
}
