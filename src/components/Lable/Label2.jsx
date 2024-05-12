import React from "react";
import styled from "styled-components";
const StyledLabel = styled.div`
  height: 36px;
  width: 274px;
  & .tiktok-effect-house {
    color: #25f4ee;
    font-family: "Inter-Medium", Helvetica;
    font-size: 10px;
    font-weight: 500;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: fixed;
    top: 0;
    margin-top: 180px;
  }
`;
export const Label2 = () => {
  return (
    <StyledLabel>
      <p className="tiktok-effect-house"> ※ 팀 참가인원 포함 총 200명 모집 </p>{" "}
    </StyledLabel>
  );
};
export default Label2;
