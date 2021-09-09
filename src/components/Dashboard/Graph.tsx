import React, { useEffect, useState } from 'react';
import {Doughnut} from 'react-chartjs-2';







export default function Graph () {
  // const {financialEvent} = useContext(FormContext)



    const [dataEvents, setDataEvents] = useState({spent:300, gain: 100, donation: 50});
    const [currentFinancialEvent, setcurrentFinancialEvent] = useState([]);



    useEffect(()=>{
      const localStorageEvents = JSON.parse(localStorage.getItem('Financial'));
      
      setcurrentFinancialEvent(localStorageEvents)


    }, [])


    function getGain() {

 

      for (let i = 1; i < currentFinancialEvent.length+1; i) {

              if(currentFinancialEvent[i].category === 'Gain') {
                let totalGain = [1];
                  totalGain.push( JSON.parse(currentFinancialEvent[i].value)); 
                
                  return console.log(totalGain,)
                 
              }

      
     }

    }


    console.log(currentFinancialEvent)
    getGain()

    const data = {
        labels: [
          'Spent',
          'Gain',
          'Donation'
      ],
      datasets: [{
        data: [dataEvents.spent, dataEvents.gain, dataEvents.donation],
        backgroundColor: [
        '#FF6384',
        '#45be64',
        '#FFCE56'
        ]
        ,
        hoverBackgroundColor: [
        '#a10a2b',
        '#02a834',
        '#daa319'
        ]
      }]
      };


    return(


        <div>
        <h2>Events in $</h2>
        <Doughnut
            className='graph'
           data={data}
           width={400}
           height={400}
        />
      </div>
    )
   
    }