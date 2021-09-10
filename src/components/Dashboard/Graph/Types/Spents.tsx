import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';




export default function Spents (){
    

    const [currentFinancialEvent, setcurrentFinancialEvent] = useState([]);

    useEffect(() => {
      const localStorageEvents = JSON.parse(localStorage.getItem("Financial"));
  
      setcurrentFinancialEvent(localStorageEvents);
    }, []);

    // filter array infos //
  
    const date = new Date();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();

      function getSpent(type) {
       
    
    
        if(currentFinancialEvent) {
    
    
          const spentFilter = currentFinancialEvent.filter(
            (item) => item.category === "Spent"
          );

          const yearFlter = spentFilter.filter(
            (item) => item.year === year
          );
  
          const monthFlter = yearFlter.filter(
            (item) => item.month === month
          );



          const typeFilter = monthFlter.filter(
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
    labels: ['water', 'energy', 'rent', 'gas', 'health', 'transport', 'food', 'recreation', 'education', 'credit card', 'others'], 
    datasets: [{
      label: `All Spents in  ${month} - ${year}`,
      data: [getSpent('Water'), getSpent('Energy'), getSpent('Rent'), getSpent('Gas'), getSpent('Health'), getSpent('Transport'), getSpent('Food'), getSpent('Recreation'), getSpent('Education'), getSpent('Credit Card'), getSpent('Others')],
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