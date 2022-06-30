import React, { FC } from "react";
import styled from "styled-components";
import HelloModal from "../components/molecules/modals/HelloModal";
import { useModal } from "../hooks/UseModal";

const Container = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  margin-left: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SummonButton = styled.button`
  margin: 0 1rem;
  background-color: transparent;
  padding: 15px 2rem;
  border-radius: 15px;
`;

const ModalPage: FC = () => {
  const [triggerModalOne, ModalOne] = useModal();
  const [triggerModalTwo, ModalTwo] = useModal();

  return (
    <Container>
      <Header>Modals</Header>
      <ModalOne contents={HelloModal} />
      <ModalTwo contents={HelloModal} requireResponse />
      <Wrapper>
        <SummonButton onClick={triggerModalOne}>
          Summon A Regular Modal
        </SummonButton>
        <SummonButton onClick={triggerModalTwo}>
          Summon A Required Modal
        </SummonButton>
      </Wrapper>
    </Container>
  );
};

export default ModalPage;
