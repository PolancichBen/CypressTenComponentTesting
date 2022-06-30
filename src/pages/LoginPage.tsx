import React, { FC, useState } from "react";
import styled from "styled-components";
import { flashSuccess } from "../helpers/flashMessage";

const Container = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  margin-left: 2rem;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  align-items: center;
  margin: 0 25%;
  padding: 15px;
`;

const Input = styled.input``;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

const Button = styled.button``;

const LoginPage: FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [data, setData] = useState({
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleSubmit = () => {
    const raw = {
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
    };
    flashSuccess("Submit Success, Resetting");
    setData(raw);
    setIsLogin(true);
  };

  return (
    <Container>
      <Header>{isLogin ? "Login Page" : "Sign-Up"}</Header>
      <LoginWrapper>
        {isLogin ? (
          <>
            <Label>
              Username
              <Input
                onChange={(e) => setData({ ...data, userName: e.target.value })}
              />
            </Label>
            <Label>
              Password
              <Input
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </Label>
          </>
        ) : (
          <>
            <Label>
              Username
              <Input
                onChange={(e) => setData({ ...data, userName: e.target.value })}
              />
            </Label>
            <Label>
              Password
              <Input
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </Label>
            <Label>
              First Name
              <Input
                onChange={(e) =>
                  setData({ ...data, firstName: e.target.value })
                }
              />
            </Label>
            <Label>
              Last Name
              <Input
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
              />
            </Label>
          </>
        )}
        <ButtonContainer>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={() => setIsLogin(!isLogin)}>
            Transition To Sign-Up
          </Button>
        </ButtonContainer>
      </LoginWrapper>
    </Container>
  );
};

export default LoginPage;
