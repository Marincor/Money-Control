import styled from "styled-components"

export const BoxContainer = styled.div `

    align-items: center;
    flex-direction: column;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    height: 100vh;


    .graph{

        cursor: pointer;
    }

`

export const Title = styled.h1 `

    font-family: sans-serif;
    color: darkmagenta;
    font-size: 2rem;
    margin: 1rem;
    font-weight: bold;

`


export const Fieldset = styled.fieldset `

display: flex;
flex-direction: ${(props)=>props.secondary? 'column': 'row'};
align-items: center;
justify-content: center;
margin: 1rem 0rem;
`

export const Label = styled.label`

font-size: 1rem;
font-weight: bold;
margin: 1rem;
cursor: pointer;


`
export const Legend = styled.legend `

color: darkgrey;
font-weight: bold;
margin: 1rem;
font-size: 1.4rem;


`