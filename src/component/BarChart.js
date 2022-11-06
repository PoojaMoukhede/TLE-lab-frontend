import React,{useNavigate} from 'react'
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
    },
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'USD',
      data: [4,10,23,35,45,49,55,60],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'INR',
      data:  [12,21,13,42,14,62,10,11],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function BarChart() {
 
 
  return (
  
<Bar options={options} data={data}/>

  
  ) 
}



