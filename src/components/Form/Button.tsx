import { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "../../Contexts/Form/Form";

const ButtonPrimary = styled.button`
  background-color: darkmagenta;
  border-radius: 1rem;
  color: white;
  cursor: pointer;
  font-weight: bold;
  margin: 1rem;
  padding: 0.5rem;
  width: 10rem;

  :hover {
    background-color: #4e054e;
  }
`;

export default function Button() {
  const { category, type, value, financialEvent, setFinancialEvent } =
    useContext(FormContext);

  const date = new Date();
  const month = date.getUTCMonth() + 1;
  const year = date.getFullYear();
  const id = Math.random() * 25;

  function registerFinancialEvent() {
    if (category && type !== "") {
      if (category === "Spent") {
        let vetorSpent = financialEvent || [];
        vetorSpent.push({
          category: category,
          type: type,
          value: JSON.parse(value),
          year: year,
          month: month,
          id: id,
        });
        setFinancialEvent(vetorSpent);
        localStorage.setItem("Financial", JSON.stringify(financialEvent));
      } else if (category === "Gain") {
        let vetorGain = financialEvent || [];
        vetorGain.push({
          category: category,
          type: type,
          value: JSON.parse(value),
          year: year,
          month: month,
          id: id,
        });
        setFinancialEvent(vetorGain);
        localStorage.setItem("Financial", JSON.stringify(financialEvent));
      } else {
        let vetorDonation = financialEvent || [];
        vetorDonation.push({
          category: category,
          type: type,
          value: JSON.parse(value),
          year: year,
          month: month,
          id: id,
        });
        setFinancialEvent(vetorDonation);

        localStorage.setItem("Financial", JSON.stringify(financialEvent));
      }

      window.location.href = "/";
    } else {
      alert("Category and Type are required!");
    }
  }

  return (
    <ButtonPrimary onClick={registerFinancialEvent}>Register</ButtonPrimary>
  );
}
