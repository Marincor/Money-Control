import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';




export default function Gains (){


    const [currentFinancialEvent, setcurrentFinancialEvent] = useState([]);

    useEffect(() => {
      const localStorageEvents = JSON.parse(localStorage.getItem("Financial"));
  
      setcurrentFinancialEvent(localStorageEvents);
    }, []);

    // filter array infos //
  
    
      function getGains(type) {
       
    
    
        if(currentFinancialEvent) {
    
    
          const gainFilter = currentFinancialEvent.filter(
            (item) => item.category === "Gain"
          );


          const typeFilter = gainFilter.filter(
            (item) => item.type === `${type}`
          );


    
     const typeInfo = typeFilter.reduce(function (accumulator, currentValue) {
         return accumulator + JSON.parse(currentValue.value);
       }, 0);
      
         return typeInfo;
    
        }
    
       
      }
    

 
      // graphs config //
    

    
  const data = {
    labels: ['salary', 'freelance job', 'others'], 
    datasets: [{
      label: 'All Gains',
      data: [getGains("Salary"), getGains("Freelance Job"), getGains("Others")],
      backgroundColor: [
        'rgba(11, 224, 107, 0.6)',
        'rgba(11, 224, 107, 0.6)',
        'rgba(11, 224, 107, 0.6)',
        'rgba(11, 224, 107, 0.6)',
      
      ],
      borderColor: [
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