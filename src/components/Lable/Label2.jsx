import React from "react";
import styled from "styled-components";

const StyledLabel = styled.div`
  height: auto;
  width: 100%;
  max-width: 274px;

  & .tiktok-effect-house {
    color: #25f4ee;
    font-family: "Inter-Medium", Helvetica;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    position: fixed;
    top: 0;
    margin-top: 170px;
    @media (max-width: 480px) {
      font-size: 8px;
      margin-top: 135px;
    }
    @media (min-width: 780px) {
      font-size: 13px;
      margin-top: 175px;
    }
  }
`;

export const Label2 = () => {
  return (
    <StyledLabel>
      <p className="tiktok-effect-house">※ 팀 참가인원 포함 총 200명 모집</p>
    </StyledLabel>
  );
};

export default Label2;
