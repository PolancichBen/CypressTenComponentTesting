import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  background-color: white;
  border-radius: 15px;
  width: 500px;
  height: 375px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HelloModal: FC = () => {
  return <Container>Hello Modal</Container>;
};

export default HelloModal;
