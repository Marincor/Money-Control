import Head from "next/head";
import Dashboard from "../components/Dashboard/index.tsx";
import styles from "../styles/Home.module.css";
import { FormProvider } from "../Contexts/Form/Form";
import { BoxContainer } from "../UI";
import Footer from "../components/Footer/index.tsx";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Money Control - Your money management app</title>
        <meta
          name="description"
          content="Control and manage your money with Money Control!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BoxContainer>
        <FormProvider>
          <Dashboard />
        </FormProvider>
      </BoxContainer>
      <Footer />
    </div>
  );
}
