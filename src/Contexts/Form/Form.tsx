import React, { useEffect } from "react";
import { useState } from "react";

export const FormContext: any = React.createContext('');

export const FormProvider = (props: any) => {

    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [value, setValue] = useState(0.01);

    const [financialEvent, setFinancialEvent] = useState([]);
    

    useEffect(()=>{

        const currentFinancialEvents = JSON.parse(localStorage.getItem('Financial')) || [];

        setFinancialEvent(currentFinancialEvents)
    },[])

   
    


        return(

            <FormContext.Provider value={{category, setCategory, type, setType, value, setValue, financialEvent, setFinancialEvent}}> 
                {props.children}
            </FormContext.Provider>

        )



}