import React from 'react';
import {Bar} from 'react-chartjs-2';




export default function Spents (){

    
  const data = {
    labels: ['water', 'energy', 'rent', 'gas', 'health', 'transport', 'food', 'recreation', 'education', 'credit card', 'others'], 
    datasets: [{
      label: 'All Spents',
      data: [200, 40, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(196, 10, 50, 0.6)',
        'rgba(196, 10, 50, 0.6)',
        'rgba(196, 10, 50, 0.6)',
        'rgba(196, 10, 50, 0.6)',
        'rgba(196, 10, 50, 0.6)',
        'rgba(196, 10, 50, 0.6)',
        'rgba(196, 10, 50, 0.6)',
      ],
      borderColor: [
        'rgb(37, 26, 29)',
        'rgb(37, 26, 29)',
        'rgb(37, 26, 29)',
        'rgb(37, 26, 29)',
        'rgb(37, 26, 29)',
        'rgb(37, 26, 29)',
        'rgb(37, 26, 29)',
      ],
      borderWidth: 1
    }]
  };

  
const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

    return (
      <div>
        <Bar
          data={data}
          width={400}
          height={200}
          className="graph"
        />
      </div>
    );
  
};