import React from "react";
import styled, { keyframes } from "styled-components";
import Home1 from "../../../images/Home/Home1.png";

function Home() {
  return (
    <MainContainer>
      <StyledImage>
        <img className="untitled" alt="Untitled" src={Home1} />
      </StyledImage>
    </MainContainer>
  );
}

export default Home;

const electricShock = keyframes`
  0%,
  100% {
    opacity: 1;
    filter: none;
    transform: none;
  }

  5% {
    opacity: 0.8;
    filter: brightness(1.2) contrast(1.4);
    transform: translateY(-2px) rotate(-1deg);
  }

  10% {
    opacity: 0.6;
    filter: brightness(1.4) contrast(1.6);
    transform: translateY(3px) rotate(2deg);
  }

  15% {
    opacity: 0.7;
    filter: brightness(1.3) contrast(1.5);
    transform: translateY(-1px) rotate(-0.5deg);
  }

  18% {
    opacity: 0.5;
    filter: brightness(1.6) contrast(1.8);
    transform: translateY(2px) rotate(1.5deg);
  }

  20% {
    opacity: 0.9;
    filter: brightness(1.7) contrast(1.9);
    transform: translateY(-3px) rotate(-1.2deg);
  }

  23% {
    opacity: 0.7;
    filter: brightness(1.4) contrast(1.6);
    transform: translateY(4px) rotate(1.8deg);
  }

  25% {
    opacity: 0.85;
    filter: brightness(1.3) contrast(1.4);
    transform: translateY(-5px) rotate(-1deg);
  }

  30% {
    opacity: 0.8;
    filter: brightness(1.5) contrast(1.7);
    transform: translateY(2px) rotate(1.2deg);
  }

  35% {
    opacity: 0.7;
    filter: brightness(1.6) contrast(1.8);
    transform: translateY(-3px) rotate(-0.8deg);
  }

  40% {
    opacity: 0.9;
    filter: brightness(1.8) contrast(2);
    transform: translateY(4px) rotate(2deg);
  }

  45% {
    opacity: 0.6;
    filter: brightness(1.5) contrast(1.7);
    transform: translateY(-4px) rotate(-1deg);
  }

  50% {
    opacity: 0.7;
    filter: brightness(1.4) contrast(1.6);
    transform: translateY(3px) rotate(1.5deg);
  }

  55% {
    opacity: 0.85;
    filter: brightness(1.6) contrast(1.8);
    transform: translateY(-2px) rotate(-0.5deg);
  }

  60% {
    opacity: 0.7;
    filter: brightness(1.3) contrast(1.5);
    transform: translateY(5px) rotate(1.8deg);
  }

  65% {
    opacity: 0.75;
    filter: brightness(1.4) contrast(1.6);
    transform: translateY(-6px) rotate(-1.2deg);
  }

  70% {
    opacity: 0.8;
    filter: brightness(1.5) contrast(1.7);
    transform: translateY(3px) rotate(1deg);
  }

  75% {
    opacity: 0.6;
    filter: brightness(1.6) contrast(1.8);
    transform: translateY(-2px) rotate(-0.8deg);
  }

  80% {
    opacity: 0.9;
    filter: brightness(1.7) contrast(1.9);
    transform: translateY(4px) rotate(2.2deg);
  }

  85% {
    opacity: 0.7;
    filter: brightness(1.4) contrast(1.6);
    transform: translateY(-4px) rotate(-1deg);
  }

  90% {
    opacity: 0.75;
    filter: brightness(1.5) contrast(1.7);
    transform: translateY(3px) rotate(1.5deg);
  }

  95% {
    opacity: 0.8;
    filter: brightness(1.6) contrast(1.8);
    transform: translateY(-5px) rotate(-1.2deg);
  }
`;

const StyledImage = styled.div`
  position: relative;

  & .untitled {
    height: 439px;
    width: 1280px;
    animation: ${electricShock} 4s infinite;

    @media (max-width: 1200px) {
      width: 100%;
      height: auto;
    }

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }

    @media (max-width: 480px) {
      width: 100%;
      height: auto;
    }
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  margin-top: 100px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;
