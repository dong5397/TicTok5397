// index.jsx
import React from "react";
import styled from "styled-components";

const StyledLabel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: rgba(0, 0, 0, 0.3); /* 텍스트 가독성 향상 */
  border-radius: 16px;
  z-index: 10;
  transition: all 0.3s;

  & .element {
    color: #ffffff;
    font-family: "Inter-Bold", Helvetica;
    font-size: 22px;
    margin-bottom: 10px;
    margin-left: 30px;
    margin-top: -0px;
    font-weight: 700;
    letter-spacing: 0;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  & .h3 {
    color: #ffffff;
    font-family: "Inter-Regular", Helvetica;
    font-size: 20px;
    margin-left: 30px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.4;

    @media (max-width: 768px) {
      font-size: 15px;
      margin-right: 2px;
    }

    @media (max-width: 480px) {
      font-size: 15px;
      margin-right: 2px;
    }
  }
`;

const BoxContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    gap: 10px;
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
      ${(props) => props.gradientEnd} 32%
    );
    border: 1px solid transparent;
    border-image: linear-gradient(
        ${(props) => (props.reverse ? "to right" : "to left")},
        ${(props) => props.gradientEnd},
        ${(props) => props.gradientEndTransparent}
      )
      1;

    border-radius: 16px;
    border: 2px solid ${(props) => props.gradientEnd}; /* 수정 */
    height: 100%;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
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
    <div className="rectangle"></div>
    <StyledLabel>
      <p className="element">일정</p>
      <div className="h3">2024년 12월경(상세일정 추후 공지)</div>
    </StyledLabel>
  </StyledBox>
);

const StyledBox2 = () => (
  <StyledBox
    gradientStart="rgba(0, 0, 0, 0)"
    gradientEnd="rgba(37, 244, 238, 0.8)"
    gradientEndTransparent="rgba(37, 244, 238, 0.1)"
    reverse={true}
  >
    <div className="rectangle"></div>
    <StyledLabel>
      <p className="element">장소</p>
      <div className="h3">서울 (상세 장소 추후 공지)</div>
    </StyledLabel>
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
