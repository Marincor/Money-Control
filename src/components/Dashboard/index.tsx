import { useState } from "react";
import { BoxContainer, Title } from "../../UI";
import Graph from "./Graph";
import RecentRegisters from "./RecentRegisters";




export default function Dashboard () {
  

    const [dataEvent, setDataEvent] = useState([]); 

    return(

    

        <BoxContainer>
            <Title>Dashboard</Title>
 
           <Graph />
       
      
          
            <RecentRegisters/>
           
        </BoxContainer>
    )
}