import styled from "styled-components"

const FooterTittle = styled.h4 `

    font-family: sans-serif;
    padding: 1rem;
    
`


export default function Footer() {



    return(

        <footer>

                <FooterTittle>Coded and created by: <a href='https://github.com/Marincor' target='_blank'> Marincor </a> </FooterTittle>

        </footer>
    )
}