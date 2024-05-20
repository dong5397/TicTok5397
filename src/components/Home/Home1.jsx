import React from "react";
import styled, { keyframes } from "styled-components";
import Home1 from "../../../images/Home/TikTokhome1.gif";

function Home() {
  return (
    <MainContainer>
      <StyledImage>
        <img className="untitled" alt="Untitled" src={Home1} />
      </StyledImage>
    </MainContainer>
  );
}

export default Home;

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  margin-top: -150px;

  & .untitled {
    height: 100%;
    width: 85%;

    @media (max-width: 1200px) {
      width: 100%;
      height: auto;
    }

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }

    @media (max-width: 480px) {
      width: 100%;
      height: auto;
    }
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  margin-top: 100px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;
