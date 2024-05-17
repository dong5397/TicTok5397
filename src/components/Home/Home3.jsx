import React from "react";
import styled from "styled-components";
import img1 from "../../../images/Home/q.png";
import line from "../../../images/Home/line.png";
import StyleBox from "../Box/StyleBox";
import BackIcon1 from "../../../images/Home/backgroundIcon/BK1.png";
import { Label } from "../Lable/Label";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  @media (max-width: 768px) {
  }
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
    @media (max-width: 768px) {
      font-size: 30px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
`;

const Styleline = styled.div`
  width: 90%;
  max-width: 800px;

  margin-left: 30px;

  & .vector {
    width: 100%;
    height: 2px;

    @media (max-width: 768px) {
      width: 90%;
      margin-right: 20px;
    }

    @media (max-width: 480px) {
      width: 90%;
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
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;

    margin-left: 5px;
  }

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
    margin-top: 20px;
  }
`;
const BackIcon = styled.img`
  width: 308px;
  height: 285.6px;
  position: relative;
  right: 620px;
  top: 290px;
`;

function Home3() {
  return (
    <MainContainer>
      <BackIcon src={BackIcon1} alt="HeartIcon" />
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
