import { useEffect, useState } from "react";
import { BoxContainer, Title } from "../../UI";
import Graph from "./Graph/Graph";
import RecentRegisters from "./RecentRegisters";
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/moneyplant.json';
import styled from "styled-components";
import Link from 'next/link'

const TextAlert = styled.h2 `


  font-size: 1.2rem;
  font-family: sans-serif;
  color: #463838;

  @media screen and (max-width:767px) {

    text-align: center;
}

`



export default function Dashboard() {

    const [thereIsData, setThereIsData] = useState(false)


    // lottie animation config //
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

useEffect(()=>{


    const currentData = JSON.parse(localStorage.getItem("Financial"));


    if (currentData && currentData.length > 0 ) {

        setThereIsData(true);
    }
},[])
  
  function renderDashboard() {

   
    if (thereIsData) {
      return (
        <>
          <TextAlert>Register 💰 ↳ <Link href='/register'> something new</Link></TextAlert>
          <Graph />
        
          <RecentRegisters />
        </>
      );
      }
      else {


        return(
            <>
        
        <title>Money Control - Your money management app</title>
        <meta name="description" content="Control and manage your money with Money Control!" />
        <link rel="icon" href="/favicon.ico" />
    
            
                <TextAlert >Register an 💰 ↳ <Link href='/register'> event</Link>  to see something here!</TextAlert>
        
        
                <a href='/register'>  
                            <div>
                    <Lottie 
                        options={defaultOptions}
                        height={400}
                        width={400}
                    />
                    </div>
                       </a>     
              
             </>

       
        )
      }
    }

  return (
    <BoxContainer>
      <Title>Dashboard</Title>
        {renderDashboard()}
    </BoxContainer>
  );
}
