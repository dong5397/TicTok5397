import React from "react";
import styled from "styled-components";
import img1 from "../../../images/Home/q.png";
import line from "../../../images/Home/line.png";
import StyledBox4 from "../Box/StyledBox4";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 20px;
  margin-top: 100px;

  @media (max-width: 768px) {
    padding: 15px;
    margin-top: 80px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin-top: 60px;
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
      flex-direction: column;
      align-items: flex-start;
    }

    @media (max-width: 480px) {
      flex-direction: column;
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

const Img = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    margin-top: 10px;
  }
`;

function Home6() {
  return (
    <MainContainer>
      <StyledLabel>
        <div className="label-container">
          <Img src={img1} alt="Icon" />
          <div className="text-wrapper">전체 프로그램</div>
        </div>
        <Styleline>
          <img className="vector" src={line} alt="Line" />
        </Styleline>
      </StyledLabel>
      <StyledBox4 />
    </MainContainer>
  );
}

export default Home6;
