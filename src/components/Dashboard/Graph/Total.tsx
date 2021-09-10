import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components"

const BoxTotal = styled.div `

  display: flex;
  width: 30rem;
  cursor: pointer;

`


export default function Total() {

  const [currentFinancialEvent, setcurrentFinancialEvent] = useState([]);

  useEffect(() => {
    const localStorageEvents = JSON.parse(localStorage.getItem("Financial"));

    setcurrentFinancialEvent(localStorageEvents);
  }, []);

  // filter array infos //

  
  function getGain() {
    
  
  
    if(currentFinancialEvent) {

      const gainFilter = currentFinancialEvent.filter(
        (item) => item.category === "Gain"
      );

      const gainInfo = gainFilter.reduce(function (accumulator, currentValue) {
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

      const spentInfo = spentFilter.reduce(function (accumulator, currentValue) {
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
  
      const donationInfo = donationFilter.reduce(function (accumulator, currentValue) {
        return accumulator + JSON.parse(currentValue.value);
      }, 0);
  
      return donationInfo;

    }
  
  }

  // graph config //

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Cash in",
        data: [getGain(), getGain()],
        fill: true,
        backgroundColor: "#87c95b33",
        borderColor: "#18d818"
      },
      {
        label: "Cash out",
        data: [getSpent()+getDonation(), getSpent()+getDonation(), 35, 51, 54, 76],
        fill: false,
        borderColor: "#da2c20"
      }
    ]
  };

  return (
    <BoxTotal >
      <Line data={data} />
    </BoxTotal>
  );
}
