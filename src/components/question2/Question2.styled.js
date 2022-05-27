import styled from "styled-components";

export const layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const box = styled.div`
  transition: 1s background-color;
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.backgroundColor};
`;
