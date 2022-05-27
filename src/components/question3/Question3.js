import React, { useState, useEffect } from "react";
import * as S from "./Question3.styled";
import { isColor } from "../common/common";

function Question3() {
  const [backgroundColor, setBackgroundColor] = useState();

  function makeDelay(delay, color) {
    setTimeout(() => {
      setBackgroundColor(color);
    }, delay);
  }
  const changeColorAfter = async (delay, color) => {
    // Write your code here
    if (isColor(color)) await makeDelay(delay, color);
    else throw new Error(`wrong color: ${color}`);
  };

  useEffect(() => {
    changeColorAfter(1000, "red")
      .then(() => changeColorAfter(2000, "orange"))
      .then(() => changeColorAfter(3000, "yellow"))
      .then(() => changeColorAfter(1000, "green"))
      .then(() => changeColorAfter(4000, "blue"))
      .then(() => changeColorAfter(5000, "indigo"));
  }, []);

  return (
    <S.layout>
      <h1>Color the box</h1>
      <S.box backgroundColor={backgroundColor}></S.box>
    </S.layout>
  );
}

export default Question3;
