import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import { BoxType } from '../../../../UI';




export default function Donations (){
    const [currentFinancialEvent, setcurrentFinancialEvent] = useState([]);

    useEffect(() => {
      const localStorageEvents = JSON.parse(localStorage.getItem("Financial"));
  
      setcurrentFinancialEvent(localStorageEvents);
    }, []);

    // filter array infos //
  
    const date = new Date();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    
      function getDonations(type) {
       
    
    
        if(currentFinancialEvent) {
    
    
          const donationFilter = currentFinancialEvent.filter(
            (item) => item.category === "Donation"
          );


          const yearFlter = donationFilter.filter(
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
    labels: ['ong', 'natural person', 'political campaign', 'others'], 
    datasets: [{
      label: `All Donations in  ${month} - ${year}`,
      data: [getDonations("ONG"), getDonations("Natural person"), getDonations("Political campaign"), getDonations("Others")],
      backgroundColor: [
        'rgba(233, 230, 38, 0.6)',
        'rgba(233, 230, 38, 0.6)',
        'rgba(233, 230, 38, 0.6)',
        'rgba(233, 230, 38, 0.6)',
      
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
      <BoxType>
        <Bar
          data={data}
          width={400}
          height={200}
          className="graph"
        />
      </BoxType>
    );
  
};