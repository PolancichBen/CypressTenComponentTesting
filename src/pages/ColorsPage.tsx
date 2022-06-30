import { endsWith } from "cypress/types/lodash";
import React, { FC, useState } from "react";
import styled from "styled-components";

import { colorsArray } from "../helpers/colors";

const Container = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColorsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ColorBox = styled.div<{ color: string }>`
  border: 1px solid black;
  width: 80px;
  height: 80px;
  background-color: ${({ color }) => color};
  margin: 0 0.5rem;
`;

const Header = styled.h1``;

const SubHeader = styled.h2``;

const ResetButton = styled.button`
  margin-top: 3rem;
  background-color: transparent;
  padding: 15px 2rem;
  border-radius: 15px;
`;

const ColorsPage: FC = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <Container>
      <Header>Colors</Header>
      <ColorsWrapper>
        {colorsArray.map((color) => (
          <ColorBox onClick={() => setSelectedColor(color)} color={color}>
            {color}
          </ColorBox>
        ))}
      </ColorsWrapper>
      <SubHeader>Selected Color</SubHeader>
      <ColorBox color={selectedColor}>{selectedColor}</ColorBox>
      <ResetButton onClick={() => setSelectedColor("")}>Reset</ResetButton>
    </Container>
  );
};

export default ColorsPage;
