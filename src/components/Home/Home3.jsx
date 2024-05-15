import React from "react";
import styled from "styled-components";
import img1 from "../../../images/Home/q.png";
import line from "../../../images/Home/line.png";
import StyleBox from "../Box/StyleBox";
import { Label } from "../Lable/Label";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 70vh;

  overflow: hidden;
`;

const StyledLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  width: 100%;
  max-width: 800px;

  & .label-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & .text-wrapper {
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-top: 20px;
  }
`;

const Styleline = styled.div`
  width: 90%;
  max-width: 800px;
  margin-top: 10px;
  margin-left: 60px;

  & .vector {
    width: 100%;
    height: 2px;

    @media (max-width: 768px) {
      margin-left: -50px;
    }

    @media (max-width: 480px) {
      margin-left: -50px;
    }
  }
`;

const BoxContainer = styled.div`
  margin-top: 30px;
  max-width: 800px;
  width: 100%;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 20px;
`;

function Home3() {
  return (
    <MainContainer>
      <StyledLabel>
        <div className="label-container">
          <Img src={img1} alt="Icon" />
          <div className="text-wrapper">어떤 주제로 진행되나요?</div>
        </div>
        <Styleline>
          <img className="vector" src={line} alt="Line" />
        </Styleline>
      </StyledLabel>
      <BoxContainer>
        <StyleBox />
      </BoxContainer>
      <Label />
    </MainContainer>
  );
}

export default Home3;
