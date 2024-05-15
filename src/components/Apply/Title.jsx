// Title 컴포넌트
import BackIcon1 from "../../../images/Home/backgroundIcon/BKI1.svg";

import React from "react";
import styled from "styled-components";

function Title({ ticTokImage, arImage }) {
  return (
    <TitleContainer>
      <BackIcon src={BackIcon1} alt="HeartIcon" />
      <br />
      <img className="tiktok-image" alt="TicTok Logo" src={ticTokImage} />
      <StyledLabel>
        <img className="AR" alt="Ar" src={arImage} />
      </StyledLabel>
    </TitleContainer>
  );
}

export default Title;

const TitleContainer = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  margin-top: 250px;
  text-align: center;
  transform: translateY(-10%);
  margin-bottom: 80px;

  & img {
    max-width: 100%;
    height: auto;
    margin-bottom: 5px;
  }

  @media (max-width: 800px) {
    max-width: 100%;
    margin-top: 150px;
    margin-bottom: 60px;
  }

  @media (max-width: 480px) {
    margin-top: 120px;
    margin-bottom: 40px;
  }
`;

const StyledLabel = styled.div`
  height: 173px;
`;

const BackIcon = styled.img`
  width: 308px;
  height: 285.6px;
  position: relative;
  right: 250px;
  top: 160px;
`;
