import React from "react";
import styled from "styled-components";
import StyledBox7 from "../Box/StyledBox7";

const StyledBox = styled.div`
  position: relative;
  height: 100vh; /* 세로로 꽉 차게 만듦 */
  width: 100%; /* 가로로 꽉 차게 만듦 */
  overflow: hidden; /* 넘치는 부분을 숨김 */
  display: flex;
  justify-content: center;
  align-items: center;

  & .rectangle {
    background: linear-gradient(
      1200deg,
      rgb(37, 244, 222.37) 42.9%,
      rgba(247, 50, 90, 0.8) 100%
    );
    border: 1px solid;
    border-color: #000000;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%; /* 세로를 가로 방향으로 회전시킴 */
    height: 100vw; /* 가로를 세로 방향으로 회전시킴 */
    transform: translate(-50%, -50%) rotate(90deg);

    @media (max-width: 100%) {
      width: 120%;

      transform: translate(-50%, -50%) rotate(0deg);
    }

    @media (max-width: 100%) {
      width: 100%;

      transform: translate(-50%, -50%) rotate(0deg);
    }
  }
`;

export const Home9 = () => {
  return (
    <StyledBox>
      <div className="rectangle"></div>
      <StyledBox7 />
    </StyledBox>
  );
};

export default Home9;
