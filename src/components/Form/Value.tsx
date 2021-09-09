import { Fieldset, Label, Legend } from "../../UI";
import styled from "styled-components";
import { useContext } from "react";
import { FormContext } from "../../contexts/form";

const Input = styled.input`
  border-radius: 1rem;
  cursor: pointer;
  background-color: purple;
  margin: 1rem;
  padding: 0.2rem;
  -webkit-appearance: none;
  width: 15rem;

  ::-webkit-slider-thumb {
    background-color: white;
    border-radius: 2rem;
    height: 1rem;
    -webkit-appearance: none;
    width: 1rem;
  }
`;

export default function Value() {
  const {value, setValue} = useContext(FormContext)

  return (
    <Fieldset secondary>
      <Legend> Value</Legend>
      <Label htmlFor="price">$ {value}</Label>

      <Input
        type="range"
        min="0.01"
        max="10000"
        step="0.01"
        id="price"
        onChange={(e:any)=>{ setValue(e.target.value)}}
        onKeyPress={(e)=>console.log(e)}
      />
    </Fieldset>
  );
}
