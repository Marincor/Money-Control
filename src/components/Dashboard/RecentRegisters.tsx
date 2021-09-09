
import { useContext } from "react"
import styled from "styled-components"
import { FormContext } from "../../contexts/form"

const Table =  styled.table `

    margin-top: 1rem;
    width: auto;
    height: auto;
    box-shadow: #dbd6d6 0px 0px 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-family: sans-serif;
    padding-bottom: 2rem;
`
const Th = styled.th `

    width: 15rem;
    font-size: 1.2rem;
    padding: 2rem;
    border-left: 0rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    color: darkgray;
    font-weight: bold;
    margin-bottom: 1rem;

`

const Td = styled(Th) `
    
   
    color: ${(props) => props.color};
    width: 15rem;
    border-bottom: 0rem;
    text-align: left;

`

const Tr = styled.tr `

    width: auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    
`

export default function RecentRegisters () {

    const {financialEvent} = useContext(FormContext)



    function colorDefinedByCategory (category) {

        let color = 'black';

        if (category === 'Spent' || category === 'Donation') {

            color = 'red';
            
        } else {


            color = 'green'
        }


        return (color)
    }


    function renderItems() {

        if(financialEvent) {




    
          return( financialEvent.map((item: any, index: any)=>{ return(
          
            <Tr key={index}>
                <Td color='black'>{item.category}</Td>
                <Td color='black'>{item.type}</Td>
                <Td color={colorDefinedByCategory(item.category)}> $ {item.value}</Td>
            
            
            </Tr>
          
          )}))

           
        }
        
    }

    return(

        <Table >
        <thead>
            <Tr>
                <Th>Category</Th>
                <Th>Type</Th>
                <Th>Value</Th>
            </Tr>
        </thead>
        <tbody>
           
                {renderItems()} 
            
        </tbody>
    </Table>
    )
}