'use client'
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const PrevalenceChart = () => {
  const data = {
    labels: ['Estimated','Overall','Female','Male','18-25','26-49','50+','Hispanic ','White','Black','Asian','NH/OPI','AI/AN','2 or More'],
    datasets: [{
      label: 'Affected by Mental Health Illness',
      data: [26,20.6,24.5,16.3,29.4,25.0,14.0,18.0,22.2,17.3,14.4,16.6,18.7,31.7],
      backgroundColor: [
        '#6B88D1','#6B88D1',
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
          text: '% of Population'
        }
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default PrevalenceChart;
