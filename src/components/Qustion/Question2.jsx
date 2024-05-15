import React from "react";
import styled from "styled-components";

import StyleBox2_2 from "../Box/StyleBox2_2";
import Question3 from "../Qustion/Question3";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;

  overflow: hidden;

  @media (max-width: 768px) {
    padding: 15px;
    margin-top: 80px;
    margin-bottom: 150px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin-top: 60px;
    margin-bottom: 100px;
  }
`;

const BoxContainer = styled.div`
  max-width: 800px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    margin-top: 15px;
  }
`;

function Question2() {
  return (
    <MainContainer>
      <BoxContainer>
        <StyleBox2_2 />
      </BoxContainer>
      <Question3 />
    </MainContainer>
  );
}

export default Question2;
