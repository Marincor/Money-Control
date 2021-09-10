import styled from "styled-components";
import Lottie from "react-lottie";
import ErrorAnimation from "../assets/lotties/error.json";
import Link from "next/link";
import Head from "next/head";

const BoxPage404 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const TitlePage404 = styled.h1`
  color: black;
  size: 1rem;
  font-weight: bold;
  font-family: sans-serif;
  margin-top: 2rem;

  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

export default function Custom500() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ErrorAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Head>
        <title>Money Control - 404 error</title>
        <meta
          name="description"
          content="Control and manage your money with Money Control!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BoxPage404>
        <TitlePage404>
          Error 404 - this page doesn't exist... comeback{" "}
          <Link href="/"> here</Link>{" "}
        </TitlePage404>
        <div>
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
      </BoxPage404>
    </>
  );
}
