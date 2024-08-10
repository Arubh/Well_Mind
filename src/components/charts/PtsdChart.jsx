// src/components/PTSDPrevalenceChart.js
'use client'
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const PtsdChart = () => {
  const data = {
    labels: ['Overall', 'Female', 'Male', '18-29', '30-44', '45-59', '60+'],
    datasets: [{
      label: 'Adults With PTSD',
      data: [3.6, 5.2, 1.8, 4.0, 3.5, 5.3, 1.0],
      backgroundColor: [
        '#6B88D1',
        '#939DB8', '#939DB8',
        '#6A7285', '#6A7285', '#6A7285', '#6A7285'
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
          text: '% of Population'
        }
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default PtsdChart;
