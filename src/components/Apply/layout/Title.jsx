// Title 컴포넌트
import BackIcon1 from "../../../../images/Home/backgroundIcon/BK1.png";

import React from "react";
import TicTokImage from "../../../../images/Home/TicTok.svg";
import AR from "../../../../images/Apply/AR.png";

import styled from "styled-components";

function Title() {
  return (
    <TitleContainer>
      <BackIcon src={BackIcon1} alt="HeartIcon" />
      <br />
      <StyledImage
        className="tiktok-image"
        alt="TicTok Logo"
        src={TicTokImage}
      />
      <StyledLabel>
        <img className="AR" alt="Ar" src={AR} />
      </StyledLabel>
    </TitleContainer>
  );
}

export default Title;

const TitleContainer = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
  gap: 20px;
  margin-bottom: 117px;

  /* Mobile devices (폰) */
  @media (min-width: 320px) and (max-width: 425px) {
    gap: 10px;
    margin-bottom: 39px;
  }

  /* Tablet devices (작은 태블릿) */
  @media (min-width: 426px) and (max-width: 767px) {
    gap: 15px;
  }

  /* Tablet devices (큰 태블릿) */
  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 15px;
  }

  /* Large devices (작은 데스크톱, 1024px 이상) */
  @media (min-width: 1024px) and (max-width: 1439px) {
    gap: 20px;
  }

  /* Extra large devices (큰 데스크톱, 1440px 이상) */
  @media (min-width: 1440px) {
    gap: 20px;
  }
`;

const StyledImage = styled.img`
  /* Mobile devices (폰) */
  @media (min-width: 320px) and (max-width: 425px) {
    width: 40px; /* 이미지를 viewport 너비의 60%로 설정하여 모바일 화면 크기에 맞게 조정 */
  }

  /* Tablet devices (작은 태블릿) */
  @media (min-width: 426px) and (max-width: 767px) {
    width: 60px;
  }

  /* Tablet devices (큰 태블릿) */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 95px; /* 최대 너비를 부모 요소의 100%로 설정하여 이미지가 넘치지 않도록 함 */
  }

  /* Large devices (작은 데스크톱, 1024px 이상) */
  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 110px; /* 최대 너비를 부모 요소의 100%로 설정하여 이미지가 넘치지 않도록 함 */
    height: auto; /* 가로 크기에 맞게 세로 비율을 유지하도록 함 */
  }

  /* Extra large devices (큰 데스크톱, 1440px 이상) */
  @media (min-width: 1440px) {
    width: 110px; /* 최대 너비를 부모 요소의 100%로 설정하여 이미지가 넘치지 않도록 함 */
    height: auto; /* 가로 크기에 맞게 세로 비율을 유지하도록 함 */
  }
`;

const StyledLabel = styled.div`
  /* Mobile devices (폰) */
  @media (min-width: 320px) and (max-width: 425px) {
    width: 60%; /* 이미지를 부모 요소의 100%로 설정하여 모바일 화면 크기에 맞게 조정 */
    height: auto; /* 가로 크기에 맞게 세로 비율 유지 */
  }
  /* Tablet devices (작은 태블릿) */
  @media (min-width: 426px) and (max-width: 767px) {
    width: 70%; /* 이미지를 부모 요소의 100%로 설정하여 모바일 화면 크기에 맞게 조정 */
    height: auto; /* 가로 크기에 맞게 세로 비율 유지 */
  }

  /* Tablet devices (큰 태블릿) */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 70%; /* 이미지를 부모 요소의 100%로 설정하여 모바일 화면 크기에 맞게 조정 */
    height: auto; /* 가로 크기에 맞게 세로 비율 유지 */
  }

  /* Large devices (작은 데스크톱, 1024px 이상) */
  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 60%; /* 이미지를 부모 요소의 100%로 설정하여 모바일 화면 크기에 맞게 조정 */
    height: auto; /* 가로 크기에 맞게 세로 비율 유지 */
  }

  /* Extra large devices (큰 데스크톱, 1440px 이상) */
  @media (min-width: 1440px) {
    width: 80%; /* 이미지를 부모 요소의 100%로 설정하여 모바일 화면 크기에 맞게 조정 */
    height: auto; /* 가로 크기에 맞게 세로 비율 유지 */
  }

  & .AR {
    width: 100%;
  }
`;

const BackIcon = styled.img`
  /* Mobile devices (폰) */
  @media (min-width: 320px) and (max-width: 425px) {
    width: 58px;
    height: 285.6px;
    position: relative;
    right: 250px;
    top: 160px;
  }

  /* Tablet devices (작은 태블릿) */
  @media (min-width: 426px) and (max-width: 767px) {
    width: 158px;
    height: 285.6px;
    position: relative;
    right: 250px;
    top: 160px;
  }

  /* Tablet devices (큰 태블릿) */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 208px;
    height: 285.6px;
    position: relative;
    right: 250px;
    top: 160px;
  }

  /* Large devices (작은 데스크톱, 1024px 이상) */
  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 308px;
    height: 285.6px;
    position: relative;
    right: 250px;
    top: 160px;
  }

  /* Extra large devices (큰 데스크톱, 1440px 이상) */
  @media (min-width: 1440px) {
    width: 308px;
    height: 285.6px;
    position: relative;
    right: 250px;
    top: 160px;
  }

  @media (max-width: 425px) {
    width: 25%;
    height: 25%;
    position: relative;
    top: 90px;
    right: 100px;
  }
`;
