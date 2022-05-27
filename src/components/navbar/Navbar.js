import React from "react";
import * as S from "./Navbar.styled";
const NavBar = () => {
  return (
    <S.navbar>
      <S.link to="/question1">Question1</S.link>
      <S.link to="/question2">Question2</S.link>
      <S.link to="/question3">Question3</S.link>
      <S.link to="/question4">Question4</S.link>
    </S.navbar>
  );
};
export default NavBar;
