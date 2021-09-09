import { BoxContainer, Title } from "../../UI";
import Form from "../../components/Form/";
import { FormProvider } from "../../contexts/form";

export default function register() {
  return (
    <BoxContainer>
      <Title>Register a new event</Title>
      <FormProvider>
        <Form />
      </FormProvider>
   
    </BoxContainer>
  );
}
