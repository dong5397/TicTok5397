import React from "react";
import styled from "styled-components";
import img1 from "../../../images/Home/q.png";
import line from "../../../images/Home/line.png";
import StyledBox4 from "../Box/StyledBox4";
import BackIcon3 from "../../../images/Home/backgroundIcon/BK2.png";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin-top: -100px;
  @media (max-width: 768px) {
    margin-top: 80px;
  }

  @media (max-width: 480px) {
    margin-top: -220px;
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
  height: 79px;
  margin-top: -5px;

  @media (max-width: 768px) {
    width: 47px;
    height: 50px;
    margin-top: 10px;
    margin-left: 5px;
  }
`;
const BackIcon = styled.img`
  width: 449px;
  height: 413.8px;
  position: relative;
  right: 520px;
  top: 430px;
`;
function Home6() {
  return (
    <MainContainer>
      <BackIcon src={BackIcon3} alt="HeartIcon" />
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
