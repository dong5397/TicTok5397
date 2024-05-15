import React from "react";
import styled from "styled-components";

const StyledNotificationLabel = styled.div`
  height: auto;
  width: 100%;
  max-width: 800px;
  margin-top: 20px;

  .tiktok-effect-house,
  .text-wrapper {
    color: #25f4ee;
    font-family: "Inter-Medium", Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: normal;

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media (max-width: 480px) {
      font-size: 9px;
    }
  }

  .tiktok-effect-house {
    margin-bottom: 5px;
    margin-left: 20px;

    @media (max-width: 768px) {
      margin-left: 25px;
    }

    @media (max-width: 480px) {
      margin-left: 20px;
    }
  }

  .text-wrapper {
    margin-left: 35px;

    @media (max-width: 768px) {
      margin-left: 35px;
    }

    @media (max-width: 480px) {
      margin-left: 30px;
    }
  }
`;

export const Label3 = () => {
  return (
    <StyledNotificationLabel>
      <p className="tiktok-effect-house">
        ※ Tiktok Effect House 메이커톤 전용 페이지(온라인)
      </p>
      <p className="tiktok-effect-house">
        학회 홈페이지 진행 행사 안내 페이지(QR 삽입 - 지원하러 가기)
      </p>
      <p className="tiktok-effect-house">
        학교, 학과, 이름, 연락처, 이메일, 틱톡 아이디 필수, 정보 동의 필요
      </p>
    </StyledNotificationLabel>
  );
};

export default Label3;
