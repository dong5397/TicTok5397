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
  width: 85%;
  max-width: 800px;

  margin-left: 60px;

  & .vector {
    width: 100%;
    height: 2px;

    @media (max-width: 768px) {
      width: 85%;
    }
  }
`;

const BoxContainer = styled.div`
  margin-top: 50px;
  max-width: 800px;
  width: 100%;
`;

const Img = styled.img`
  width: 77px;
  height: 80px;
  margin-top: -5px;
  @media (max-width: 768px) {
    width: 47px;
    height: 50px;
    margin-top: 10px;
    margin-left: 5px;
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
