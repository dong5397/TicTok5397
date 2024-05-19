import React from "react";
import styled from "styled-components";
import Home1 from "../../images/LastPage.svg";

function Home() {
  return (
    <MainContainer>
      <StyledImage src={Home1} alt="Untitled" />
    </MainContainer>
  );
}

export default Home;

const StyledImage = styled.img`
  width: 100%;

  height: auto;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
