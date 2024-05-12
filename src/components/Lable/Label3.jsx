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
    margin-top: 90px;
  }
`;
export const Label3 = () => {
  return (
    <StyledLabel>
      {" "}
      <p className="tiktok-effect-house">
        {" "}
        Tiktok Effect House 메이커톤 전용페이지(온라인) <br /> 학회 홈페이지
        진행행사 안내페이지(QR 삽입 - 지원하러가기) <br /> 학교, 학과, 이름,
        연락처, 이메일, 틱톡 아이디 필수, 정보 동의 필요{" "}
      </p>{" "}
    </StyledLabel>
  );
};
export default Label3;
