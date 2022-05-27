import React from "react";
import { tvShows } from "../fakeData/data";
import * as S from "./Question4.styled";
import { findHighest } from "../common/common";

function Question4() {
  let highest = findHighest(tvShows);
  let temp = tvShows.filter((r) => r.score !== highest[0].score);
  let highest2th = findHighest(temp);
  return (
    <>
      <h3>- Highest rated TV show</h3>
      <S.cards>
        {highest.map((item, index) => {
          return (
            <S.card key={index}>
              <h1>{index + 1}.</h1>
              <h4>Title: {item.title}</h4>
              <h4>Rating: {item.numRatings}</h4>
              <h4>Score: {item.score}</h4>
              <h4>Year: {item.year}</h4>
            </S.card>
          );
        })}
      </S.cards>
      <h3>- 2nd highest rated TV show</h3>
      <S.cards>
        {highest2th.map((item, index) => {
          return (
            <S.card key={index}>
              <h1>{index + 1}.</h1>
              <h4>Title: {item.title}</h4>
              <h4>Rating: {item.numRatings}</h4>
              <h4>Score: {item.score}</h4>
              <h4>Year: {item.year}</h4>
            </S.card>
          );
        })}
      </S.cards>
    </>
  );
}

export default Question4;
