'use client'
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const RecievedCareChart = () => {
  const data = {
    labels: ['Overall','Female','Male','18-25','26-49','50+','Hispanic or Latino','White','Black or African American','Asian','2 or More'],
    datasets: [{
      label: 'Recieved Care in Past Year',
      data: [44.8,49.7,36.8,38.9,45.4,47.2,33.9,50.3,32.9,23.3,43.0],
      backgroundColor: [
        '#6B88D1',
        '#939DB8','#939DB8',
        '#6A7285','#6A7285','#6A7285',
        '#8395C0','#8395C0','#8395C0','#8395C0','#8395C0','#8395C0','#8395C0'
      ],
      hoverOffset: 4
    }]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: '% of Population with Condition'
        }
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default RecievedCareChart;
