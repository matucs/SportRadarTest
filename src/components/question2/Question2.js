import React, { useState, useEffect } from "react";
import * as S from "./Question2.styled";
import { isColor } from "../common/common";

function Question2() {
  const [backgroundColor, setBackgroundColor] = useState();

  function makeDelay(delay, color) {
    setTimeout(() => {
      setBackgroundColor(color);
    }, delay);
  }
  const changeColorAfter = (delay, color) => {
    // Write your code here
    return new Promise((resolve, reject) => {
      if (isColor(color)) {
        makeDelay(delay, color);
        resolve();
      } else {
        reject(`wrong color: ${color}`);
      }
    });
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

export default Question2;
