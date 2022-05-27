import styled from "styled-components";
import { Link } from "react-router-dom";

export const navbar = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: row;
  padding: 5px;
  justify-content: center;
  align-items: flex-start;
  width: fit-content;
  margin-bottom: 20px ;
`;
export const link = styled(Link)`
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
  background-color: gray;
  text-align: center;
  text-decoration: none;
  color: black;
  font-size: small;
  width: 100px;
`;
