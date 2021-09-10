import { Fieldset, Legend } from "../../UI";
import styled from "styled-components";
import { FormContext } from "../../contexts/form";
import { useContext } from "react";

const Select = styled.select`
  border: none;
  border-bottom: 1px solid gray;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  margin: 1rem;
  padding: 0.5rem;
  text-align: center;
  width: 16rem;

  :hover {
    border-bottom: 2px solid purple;
  }
`;

const Option = styled.option`
  font-size: 1rem;
  font-weight: bold;
`;

export default function Type() {
  const { setType, category } = useContext(FormContext);

  const spentOptions = (
    <>
      <Option value="">.</Option>
      <Option value="Water">Water</Option>
      <Option value="Energy">Energy</Option>
      <Option value="Rent">Rent</Option>
      <Option value="Gas">Gas</Option>
      <Option value="Health">Health</Option>
      <Option value="Transport">Transport</Option>
      <Option value="Food">Food</Option>
      <Option value="Recreation">Recreation</Option>
      <Option value="Education">Education</Option>
      <Option value="Credit Card">Credit Card</Option>
      <Option value="Others">Others</Option>
    </>
  );

  const gainOptions = (
    <>
      <Option value="">.</Option>
      <Option value="Salary">Salary</Option>
      <Option value="Freelance Job">Freelance Job</Option>
      <Option value="Others">Others</Option>
    </>
  );
  const donateOptions = (
    <>
      <Option value="">.</Option>
      <Option value="ONG">ONG</Option>
      <Option value="Natural person">Natural person</Option>
      <Option value="Political campaign">Political campaign</Option>
      <Option value="Others">Others</Option>
    </>
  );

  function renderOptions() {
    if (category === "Spent") {
      return spentOptions;
    } else if (category === "Gain") {
      return gainOptions;
    } else {
      return donateOptions;
    }
  }

  return (
    <Fieldset>
      <Legend>Type</Legend>

      <Select
        name="type"
        id="type"
        onChange={(e) => {
          setType(e.target.value);
        }}
      >
        {renderOptions()}
      </Select>
    </Fieldset>
  );
}
