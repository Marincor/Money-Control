import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components"
import Lottie from 'react-lottie';
import GainsAnimation from '../../../assets/lotties/gains.json';
import SpentAnimation from '../../../assets/lotties/spent.json';

const BoxTotal = styled.div `

  display: flex;
  width: 30rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;

`

const Results = styled.p `

  font-family: sans-serif;
  font-weight: bold;
  margin-top: 1rem;

`


export default function Total() {

  const [currentFinancialEvent, setcurrentFinancialEvent] = useState([]);

  useEffect(() => {
    const localStorageEvents = JSON.parse(localStorage.getItem("Financial"));

    setcurrentFinancialEvent(localStorageEvents);
  }, []);


  // lottie animation config //

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: GainsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: SpentAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };



  // filter array infos //
  const date = new Date();
  const year = date.getUTCFullYear();
  
  function getGain(month) {
    
  
  
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

  function getSpent(month) {
   


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
  function getDonation(month) {

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

  // graph config //

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: `Cash in - ${year}`,
        data: [getGain(1), getGain(2), getGain(3), getGain(4), getGain(5), getGain(6),getGain(7),getGain(8),getGain(9),getGain(10),getGain(11),getGain(12)],
        fill: true,
        backgroundColor: "#87c95b33",
        borderColor: "#18d818"
      },
      {
        label: `Cash out - ${year}`,
        data: [getSpent(1)+getDonation(1), getSpent(2)+getDonation(2), getSpent(3)+getDonation(3), getSpent(4)+getDonation(4), getSpent(5)+getDonation(5), getSpent(6)+getDonation(6), getSpent(7)+getDonation(7), getSpent(8)+getDonation(8), getSpent(9)+getDonation(9), getSpent(10)+getDonation(10), getSpent(11)+getDonation(11), getSpent(12)+getDonation(12)],
        fill: false,
        borderColor: "#da2c20"
      }
    ]
  };


    // condition to animate //

    const cashIn = getGain(1)+ getGain(2) + getGain(3) +getGain(4) + getGain(5)+ getGain(6)+getGain(7) + getGain(8) +getGain(9)+getGain(10)+getGain(11)+getGain(12);

    const cashOut = (getSpent(1)+getDonation(1)) + (getSpent(2)+getDonation(2)) + (getSpent(3)+getDonation(3)) + (getSpent(4)+getDonation(4)) + (getSpent(5)+getDonation(5)) + (getSpent(6)+getDonation(6)) + (getSpent(7)+getDonation(7)) + (getSpent(8)+getDonation(8)) + ( getSpent(9)+getDonation(9))+ (getSpent(10)+getDonation(10)) + (getSpent(11)+getDonation(11)) + (getSpent(12)+getDonation(12));
  

      function animateBySituation () {

        let currentOptions: any = defaultOptions;
        let message: string = 'Congrats, your gains are higher than your costs.'

        if(cashIn < cashOut) {

          currentOptions = defaultOptions2;
          message = "Your costs are to expensive!"
        }

return(

  <div>
    <Results>{message}</Results>
  <Lottie 
  options={currentOptions}
    height={200}
    width={200}
  />
</div>
)

     

      }


  return (
    <BoxTotal >
      <Line data={data} />
      {animateBySituation()}
    </BoxTotal>
  );
}
