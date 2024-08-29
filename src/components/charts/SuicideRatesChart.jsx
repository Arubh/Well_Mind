'use client'
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const SuicideRatesChart = () => {
  const data = {
    labels: [1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014],
    datasets: [{
      label: 'Female',
      data: [4.0,4.0,4.1,4.2,4.2,4.5,4.4,4.5,4.6,4.8,4.9,5.0,5.2,5.4,5.5,5.8],
      backgroundColor: '#6B88D1',
      borderColor: '#6B88D1',
      fill: false,
      tension: 0.1
    },
    {
      label: 'Male',
      data: [17.8,17.7,18.2,18.5,18.1,18.1,18.1,18.1,18.5,19.0,19.2,19.8,20.0,20.4,20.3,20.7],
      backgroundColor: '#6A7285',
      borderColor: '#6A7285',
      fill: false,
      tension: 0.1
    }]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Rate per 100,000 people'
        }
      }
    }
  };

  return <Bar data={data} options={options} />; 
};

export default SuicideRatesChart;
