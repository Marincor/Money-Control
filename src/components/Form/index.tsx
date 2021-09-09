import styled from "styled-components";
import Button from "./Button";
import Category from "./Category";
import Type from "./Type";
import Value from "./Value";

const FormContainer = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  height: auto;
  justify-content: center;
`;

export default function Form() {
  return (

    <> 
    
    <Category />
      <Type />
      <Value />
      <Button />
    </>
 
 
  );
}
