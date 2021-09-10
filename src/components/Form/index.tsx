import { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "../../contexts/form";
import Button from "./Button";
import Category from "./Category";
import Type from "./Type";
import Value from "./Value";
import Lottie from "react-lottie";
import spentAnimation from "../../assets/lotties/spentMoney.json";
import gainAnimation from "../../assets/lotties/gainMoney.json";
import donateAnimation from "../../assets/lotties/donation.json";

const FormContainer = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  height: auto;
  justify-content: center;
`;

export default function Form() {
  const { category } = useContext(FormContext);

  // lottie config //

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: spentAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: gainAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: donateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  function renderAnimationByCategory() {
    if (category === "Spent") {
      return (
        <div>
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>
      );
    } else if (category === "Gain") {
      return (
        <div>
          <Lottie options={defaultOptions2} height={200} width={200} />
        </div>
      );
    } else {
      return (
        <div>
          <Lottie options={defaultOptions3} height={200} width={200} />
        </div>
      );
    }
  }

  return (
    <>
      <Category />
      <Type />
      <Value />
      {renderAnimationByCategory()}
      <Button />
    </>
  );
}
