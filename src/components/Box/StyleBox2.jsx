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
  padding: 20px;
  transition: all 0.3s;

  & .element {
    color: #ffffff;
    font-family: "Inter-Bold", Helvetica;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  & .h3 {
    color: #ffffff;
    font-family: "Inter-Regular", Helvetica;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.4;
    margin-bottom: 70px;
  }
`;

const BoxContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StyledBox = styled.div`
  height: 180px;
  width: 400px;
  position: relative;
  transition: all 0.3s;

  & .rectangle {
    background: linear-gradient(
      270deg,
      ${(props) => props.gradientStart} 0%,
      ${(props) => props.gradientEnd} 100%
    );
    border: 1px solid transparent;
    border-image: linear-gradient(
        ${(props) => (props.reverse ? "to right" : "to left")},
        ${(props) => props.gradientEnd},
        ${(props) => props.gradientEndTransparent}
      )
      1;
    border-radius: 16px;
    border: 4px solid;
    height: 100%;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }

  &:hover {
    & .rectangle {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    ${StyledLabel} {
      transform: translateY(-5px);
    }
  }
`;

const StyledBox1 = () => (
  <StyledBox
    gradientStart="rgba(0, 0, 0, 0) 2.87%"
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
    gradientStart="rgba(0, 0, 0, 0) 2.87%"
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

const StyleBox2 = () => {
  return (
    <BoxContainerStyle>
      <StyledBox1 />
      <StyledBox2 />
    </BoxContainerStyle>
  );
};

export default StyleBox2;
