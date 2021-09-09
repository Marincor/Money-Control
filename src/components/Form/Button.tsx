import { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "../../contexts/form";

const ButtonPrimary = styled.button`
  background-color: darkmagenta;
  border-radius: 1rem;
  color: white;
  cursor: pointer;
  font-weight: bold;
  margin: 1rem;
  padding: 0.5rem;
  width: 10rem;
`;

export default function Button() {

  const {category, type, value, financialEvent, setFinancialEvent} = useContext(FormContext);



  function registerFinancialEvent(e) {

    e.preventDefault()

      if(category === 'Spent') {
        let vetorSpent = financialEvent || []
        vetorSpent.push({category: category, type: type, value: value})
        setFinancialEvent(vetorSpent)

      } else if (category === 'Gain') {
        let vetorGain = financialEvent || []
        vetorGain.push({category: category, type: type, value: value})
        setFinancialEvent(vetorGain)

      } else {
        let vetorDonation = financialEvent || []
        vetorDonation.push({category: category, type: type, value: value})
        setFinancialEvent(vetorDonation)

      }


      localStorage.setItem('Financial',JSON.stringify(financialEvent))
  }

  return (
    <ButtonPrimary
      onClick={registerFinancialEvent}
    >
      Register
    </ButtonPrimary>
  );
}
