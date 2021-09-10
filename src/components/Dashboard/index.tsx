import { useEffect, useState } from "react";
import { BoxContainer, Title } from "../../UI";
import Graph from "./Graph/Graph";
import RecentRegisters from "./RecentRegisters";
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/moneyplant.json';

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

    if (currentData) {

        setThereIsData(true);
    }
},[])
  
  function renderDashboard() {

   
    if (thereIsData) {
      return (
        <>
          <Graph />

          <RecentRegisters />
        </>
      );
      }
      else {


        return(
            <>
            
                <h2>Register an <a href='/register'> event</a>  to see something here!</h2>
        
        
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
