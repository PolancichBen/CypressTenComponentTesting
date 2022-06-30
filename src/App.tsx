import React, { FC } from "react";
import { Route, Routes } from "react-router";
import styled from "styled-components";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ModalPage from "./pages/ModalPage";
import ColorsPage from "./pages/ColorsPage";

import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import ReduxToastr from "react-redux-toastr";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  // justify-content: space-between; // Not Needed unless Using Footer
  min-width: 100%;
  min-height: 100%;
`;

const App: FC = () => {
  return (
    <Container>
      <ReduxToastr
        timeOut={3000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/modal" element={<ModalPage />} />
        <Route path="/colors" element={<ColorsPage />} />
      </Routes>
      {/* <GlobalFooter /> */}
    </Container>
  );
};

export default App;
