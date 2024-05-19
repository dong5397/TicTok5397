// index.jsx
import React from "react";
import styled from "styled-components";
import HomeDot from "../../../images/Home/HomeDot.png";
const BoxContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
  @media (max-width: 768px) {
    gap: 15px;
    flex-direction: column;
  }
`;

const StyledBox = styled.div`
  height: 180px;
  width: 400px;
  position: relative;
  transition: all 0.3s;

  & .rectangle {
    background: linear-gradient(
      260deg,
      ${(props) => props.gradientStart} 0%,
      ${(props) => props.gradientEnd} 80%
    );
    border-image: linear-gradient(
        ${(props) => (props.reverse ? "to right" : "to left")},
        ${(props) => props.gradientEnd},
        ${(props) => props.gradientEndTransparent}
      )
      1;

    border-radius: 16px;
    border: 1px solid ${(props) => props.gradientEnd}; /* 수정 */
    height: 100%;
    width: 100%;
    font-weight: bold;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    display: inline-block;
    justify-content: center;
    align-items: center;
    & .element {
      display: block;
      font-size: 25px;
      margin-left: 28px;
      margin-bottom: 5px;
    }
    & .h3 {
      display: inline-block;
      font-size: 20px;
      margin-left: 28px;
    }
    & .img {
      display: inline-block;
      font-size: 20px;
      margin-left: 28px;
      margin-top: 10px;
    }
  }

  &:hover {
    & .rectangle {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const StyledBox1 = () => (
  <StyledBox
    gradientStart="rgba(0, 0, 0, 0)"
    gradientEnd="rgb(254, 44, 85)"
    gradientEndTransparent="rgba(254, 44, 85, 0.1)"
    reverse={false}
  >
    <div className="rectangle">
      {" "}
      <img className="img" src={HomeDot} />
      <p className="element">일정</p>
      <div className="h3">2024년 12월경(상세일정 추후 공지)</div>
    </div>
  </StyledBox>
);

const StyledBox2 = () => (
  <StyledBox
    gradientStart="rgba(0, 0, 0, 0)"
    gradientEnd="rgba(37, 244, 238, 0.8)"
    gradientEndTransparent="rgba(37, 244, 238, 0.1)"
    reverse={true}
  >
    <div className="rectangle">
      <img className="img" src={HomeDot} />
      <p className="element">장소</p>
      <div className="h3">서울 (상세 장소 추후 공지)</div>
    </div>
  </StyledBox>
);

const StyledBoxContainer = () => {
  return (
    <BoxContainerStyle>
      <StyledBox1 />
      <StyledBox2 />
    </BoxContainerStyle>
  );
};

export default StyledBoxContainer;
