import React, { useEffect, useState } from "react";
import styled from "styled-components"
import Category from "./Category";
import Total from "./Total";
import Type from "./Types/Types";

const TitleGraph = styled.h2 `


  color: black;
  font-family: sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;

`

const BoxGraph = styled.div `


  display: flex;
  width: 100rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`

export default function Graph() {
 


  return (
    <BoxGraph>
      <TitleGraph>Events in $</TitleGraph>
      <Category />
      <Type />
      <Total />
    </BoxGraph>
  );
}
