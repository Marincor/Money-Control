import React, { useEffect, useState } from "react";
import styled from "styled-components"
import Category from "./Category";
import Type from "./Types/Types";

const TitleGraph = styled.h2 `


  color: black;
  font-family: sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;

`

export default function Graph() {
 


  return (
    <div>
      <TitleGraph>Events in $</TitleGraph>
      <Category />
      <Type />
    </div>
  );
}
