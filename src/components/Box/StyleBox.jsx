import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  height: 143px;
  width: 800px;
  position: relative;
  border: 2px solid rgb(254, 44, 85);
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    /* 왼쪽에서 오른쪽으로 변경 */ rgba(0, 0, 0, 0) 2.87%,
    rgb(254, 44, 85) 100%
  );
  box-shadow: 0 0 10px rgba(254, 44, 85, 0.8);
  transition: transform 0.3s, box-shadow 0.3s, background 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(254, 44, 85, 1);
    background: linear-gradient(
      90deg,
      /* 왼쪽에서 오른쪽으로 변경 */ rgba(0, 0, 0, 0.2) 2.87%,
      rgba(254, 44, 85, 0.2) 100%
    );
  }

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 10px;
    background: linear-gradient(
      to right,
      /* 왼쪽에서 오른쪽으로 변경 */ rgb(254, 44, 85),
      rgba(254, 44, 85, 0.2)
    );
    z-index: -1;
  }
`;

const StyledLabel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  & .element {
    color: #ffffff;
    font-family: "Inter-Medium", Helvetica;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.4;
  }
`;

function StyleBox() {
  return (
    <StyledBox>
      <StyledLabel>
        <p className="element">
          필수 미션 5개, 선택 미션 3개 수행(총 8개 미션) <br />
          간단한 페이스/2D 장식, 여름주제, 대학생이 좋아할 것 같은 필터,
          게임/챌린지/당첨 필터, 웃긴 스티커, 2~3명이 같이 찍는 스티커
        </p>
      </StyledLabel>
    </StyledBox>
  );
}

export default StyleBox;
