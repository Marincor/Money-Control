import { BoxContainer, Title } from "../../UI";
import Form from "../../components/Form";
import { FormProvider } from "../../Contexts/Form/Form";
import Head from 'next/head'


export default function register() {
  return (

    <> 
         <Head>
        <title>Money Control - Register new event</title>
        <meta name="description" content="Control and manage your money with Money Control!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <BoxContainer>
      <Title>Register a new event</Title>
      <FormProvider>
        <Form />
      </FormProvider>
   
    </BoxContainer>
    
    
    </>
  
  );
}
