import Spents from "./Spents";

import styled from "styled-components";
import Gains from "./Gains";
import Donations from "./Donations";

const BoxTypesGraphs = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80vw;
  flex-wrap: wrap;
`;

export default function Types() {
  return (
    <BoxTypesGraphs>
      <Spents />
      <Gains />
      <Donations />
    </BoxTypesGraphs>
  );
}
