import React from "react";
import styled from "styled-components";
import Img1 from "../../../images/Home/Dot2.png";
import line from "../../../images/Home/line.png";

import StyleBox2 from "../Box/StyleBox2";
import StyleBox2_2 from "../Box/StyleBox2_2";
import StyleBox2_3 from "../Box/StyleBox2_3";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 100%;
  overflow: hidden;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 80px;
    margin-bottom: 150px;
  }

  @media (max-width: 480px) {
    margin-top: 60px;
    margin-bottom: 100px;
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

    @media (max-width: 768px) {
      align-items: flex-start;
    }

    @media (max-width: 480px) {
      align-items: flex-start;
    }
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

  margin-left: 90px;

  & .vector {
    width: 100%;
    height: 2px;

    @media (max-width: 768px) {
      width: 85%;
    }
  }
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

const BoxContainer = styled.div`
  margin-top: 30px;
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 20px;
    display: inline-block;
  }

  @media (max-width: 480px) {
    width: 90%;
    margin-top: 15px;
  }
`;

function Home10() {
  return (
    <MainContainer>
      <StyledLabel>
        <div className="label-container">
          <Img src={Img1} alt="Icon" />
          <div className="text-wrapper">이펙트 하우스 어워즈 시상</div>
        </div>
        <Styleline>
          <img className="vector" src={line} alt="Line" />
        </Styleline>
      </StyledLabel>
      <BoxContainer>
        <StyleBox2 />
        <StyleBox2_2 />
      </BoxContainer>
      <StyleBox2_3 />
    </MainContainer>
  );
}

export default Home10;
