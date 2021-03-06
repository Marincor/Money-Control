import styled from "styled-components"

export const BoxContainer = styled.div `

    align-items: center;
    flex-direction: column;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    height: ${(props)=> props.secondary? 'auto': '100vh'};
    width: 100vw;
    overflow-x: hidden;

    .graph{

        cursor: pointer;
        margin: 1rem 0rem;
    }

`

export const Title = styled.h1 `

    font-family: sans-serif;
    color: darkmagenta;
    font-size: 2rem;
    margin: 1rem;
    font-weight: bold;


    @media screen and (max-width: 767px) {


      text-align: center;
    }

`


export const Fieldset = styled.fieldset `

display: flex;
flex-direction: ${(props)=>props.secondary? 'column': 'row'};
align-items: center;
justify-content: center;
margin: 1rem 0rem;

cursor: pointer;
`

export const Label = styled.label`

font-size: 1rem;
font-weight: bold;
margin: 1rem;
cursor: pointer;

:hover {

    color: darkmagenta;
}


`
export const Legend = styled.legend `

color: darkgrey;
font-weight: bold;
margin: 1rem;
font-size: 1.4rem;


`



export const BoxType = styled.div `



  @media screen and (max-width:767px) {


    width: 90vw;
  }

`