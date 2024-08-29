'use client'
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const DepressionChart = () => {
  const data = {
    labels: ['Total','18-29','30-39','40-49','50-59','60-69','70-79','80','Male','Female','Hispanic or Latino','White','Black','Asian','Other/Multiple Races'],
    datasets: [{
      label: 'Aug 19-31, 2020',
      data: [36.4,49.0,42.5,37.6,34.9,29.3,23.2,19.4,31.8,40.7,40.2,35.4,37.7,30.5,43.1],
      backgroundColor: '#6B88D1',
      hoverOffset: 4
    },
    {
      label: 'Jan 20-Feb 1, 2021',
      data: [41.5,57.0,45.9,41.1,41.2,33.4,26.3,22.5,38.0,44.8,47.1,39.8,44.5,37.4,44.8],
      backgroundColor: '#6A7285',
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

export default DepressionChart;
