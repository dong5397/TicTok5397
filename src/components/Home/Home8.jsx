import React from "react";
import styled from "styled-components";
import Img1 from "../../../images/Home/Dot2.png";
import line from "../../../images/Home/line.png";
import StyledBox6 from "../Box/StyledBox6";
import BackIcon4 from "../../../images/Home/backgroundIcon/BK4.png";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin-top: 100px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-top: 80px;
    width: 100%;

    margin-bottom: 80px;
  }

  @media (max-width: 480px) {
    margin-top: 60px;
    width: 100%;

    margin-bottom: 60px;
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
      width: 100%;
    }

    @media (max-width: 480px) {
      align-items: flex-start;
      width: 100%;
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
      margin-right: 20px;
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
    margin-top: 20px;
    margin-left: 5px;
  }

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
    margin-top: 25px;
  }
`;
const BackIcon = styled.img`
  width: 401px;
  height: 295.43px;
  position: relative;
  width: 308px;
  height: 285.6px;
  position: relative;
  right: -530px;
  top: 200px;
`;
function Home8() {
  return (
    <MainContainer>
      <BackIcon src={BackIcon4} alt="HeartIcon" />
      <StyledLabel>
        <div className="label-container">
          <Img src={Img1} alt="Icon" />
          <div className="text-wrapper">활동 혜택</div>
        </div>
        <Styleline>
          <img className="vector" src={line} alt="Line" />
        </Styleline>
      </StyledLabel>
      <StyledBox6 />
    </MainContainer>
  );
}

export default Home8;
