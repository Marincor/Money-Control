import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components"

const BoxCategory =  styled.div `

    display: flex;
    width: 20rem;

`

export default function Category () {
    const [currentFinancialEvent, setcurrentFinancialEvent] = useState([]);

    useEffect(() => {
      const localStorageEvents = JSON.parse(localStorage.getItem("Financial"));
  
      setcurrentFinancialEvent(localStorageEvents);
    }, []);
  
  
    // filter array infos //
  
    const date = new Date();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();

    function getGain() {
    

  
      if(currentFinancialEvent) {
  
        const gainFilter = currentFinancialEvent.filter(
          (item) => item.category === "Gain"
        );

        const yearFlter = gainFilter.filter(
          (item) => item.year === year
        );

        const monthFlter = yearFlter.filter(
          (item) => item.month === month
        );


       

  
        const gainInfo = monthFlter.reduce(function (accumulator, currentValue) {
          return accumulator + JSON.parse(currentValue.value);
        }, 0);
    
        return gainInfo;
  
      }
  
    
    }
  
    function getSpent() {
     
  
  
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
  
        const spentInfo = monthFlter.reduce(function (accumulator, currentValue) {
          return accumulator + JSON.parse(currentValue.value);
        }, 0);
    
        return spentInfo;
  
      }
  
     
    }
    function getDonation() {
  
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
    
        const donationInfo = monthFlter.reduce(function (accumulator, currentValue) {
          return accumulator + JSON.parse(currentValue.value);
        }, 0);
    
        return donationInfo;
  
      }
    
    }
  
  
    // graph config data //
  
  
    const data = {
      labels: ["Spent", "Gain", "Donation"],
      datasets: [
        {
          data: [getSpent(), getGain(), getDonation()],
          backgroundColor: ["#FF6384", "#45be64", "#FFCE56"],
          hoverBackgroundColor: ["#a10a2b", "#02a834", "#daa319"],
        },
      ],
    };
  

    return(
        <BoxCategory>  
        
        <Doughnut className="graph" data={data} width={1} height={1} />
         </BoxCategory>

      


    )

}