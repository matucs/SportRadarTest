import React, { useEffect, useState } from "react";
import * as S from "./Question.styled";

function Question1() {
  const [width, setWidth] = useState(() => window.innerWidth);
  const [height, setHeight] = useState(() => window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  const disableLeftClick = (e) => {
    e.preventDefault();
    alert("left click on this box is disabled, please don't try again.");
  };
  const disableRightClick = (e) => {
    e.preventDefault();
    alert("right click on this box is disabled, please don't try again.");
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <S.layout>
      <S.box onContextMenu={disableRightClick}>{width}</S.box>
      <S.box onClick={disableLeftClick}>{height}</S.box>
    </S.layout>
  );
}

export default Question1;
