import React from "react";
import styled from "styled-components";
import img1 from "../../../images/Home/q.png";
import line from "../../../images/Home/line.png";
import StyleBox2 from "../Box/StyledBox2";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
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
    }

    @media (max-width: 480px) {
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
  width: 90%;
  max-width: 800px;
  margin-top: 10px;
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

function Home4() {
  return (
    <MainContainer>
      <StyledLabel>
        <div className="label-container">
          <Img src={img1} alt="Icon" />
          <div className="text-wrapper">대상 모집은 어떻게 되나요?</div>
        </div>
        <Styleline>
          <img className="vector" src={line} alt="Line" />
        </Styleline>
      </StyledLabel>
      <StyleBox2 />
    </MainContainer>
  );
}

export default Home4;
