import React from "react";
import styled from "styled-components";

const StyledNotificationLabel = styled.div`
  height: auto;
  width: 100%;
  max-width: 800px;
  margin-top: 20px;

  & .text-wrapper {
    color: #25f4ee;
    font-family: "Inter-Medium", Helvetica;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    margin-bottom: 5px;

    @media (max-width: 768px) {
      font-size: 9px;
    }

    @media (max-width: 480px) {
      font-size: 8px;
    }
  }

  & .indent {
    margin-left: 10px; /* 들여쓰기 간격 */

    @media (max-width: 768px) {
      margin-left: 8px;
    }

    @media (max-width: 480px) {
      margin-left: 6px;
    }
  }
`;

export const Label = () => {
  return (
    <StyledNotificationLabel>
      <p className="text-wrapper">
        ※ 매주 수요일 미션 내역 확인 후 미션 상황 공지
      </p>
      <p className="text-wrapper indent">
        매주 목요일 오전 11시 교육 동영상 및 미션 내역 공지
      </p>
    </StyledNotificationLabel>
  );
};

export default Label;