import BackIcon1 from "../../../images/Home/backgroundIcon/BK1.png";
import React from "react";
import TicTokImage from "../../../images/Home/TicTok.png";
import AR from "../../../images/Apply/AR.png";
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

const TitleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

const StyledImage = styled.img`
  max-width: 20%;
  height: auto;

  /* 작은 태블릿 */
  @media (min-width: 481px) and (max-width: 767px) {
    max-width: 15vw;
  }
  @media (max-width: 425px) {
    max-width: 15vw;
  }
`;

const StyledLabel = styled.div`
  height: 200px;
  margin-bottom: 100px;

  /* 작은 태블릿 */
  @media (min-width: 481px) and (max-width: 767px) {
    height: 100px;
    margin-bottom: 0px;

    .AR {
      width: 60vw;
      height: auto;
    }
  }

  @media (max-width: 425px) {
    height: 100px;
    margin-bottom: 0px;

    .AR {
      width: 60vw;
      height: auto;
    }
  }
`;

const BackIcon = styled.img`
  width: 308px;
  height: 285.6px;
  position: relative;
  right: 250px;
  top: 160px;

  /* 작은 태블릿 */
  @media (min-width: 481px) and (max-width: 767px) {
    width: 25%;
    height: 25%;
    position: relative;
    top: 90px;
    right: 100px;
  }

  @media (max-width: 425px) {
    width: 25%;
    height: 25%;
    position: relative;
    top: 90px;
    right: 100px;
  }
`;
