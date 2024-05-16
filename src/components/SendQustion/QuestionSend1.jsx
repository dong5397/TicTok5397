import React from "react";
import styled, { keyframes } from "styled-components";
import line from "../../../images/Home/line.png";
import star from "../../../images/Question/star.png";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

function QuestionSend() {
  return (
    <MainContainer>
      <StyledLabel>
        <div className="label-container">
          <div className="text-wrapper">문의하기</div>
        </div>
        <StyledLine>
          <img className="vector" src={line} alt="Line" />
        </StyledLine>
      </StyledLabel>
      <StyledLabel>
        <div className="row-wrapper">
          <div className="text-wrapper2">
            문의자 명
            <img className="star-icon" src={star} alt="Star" />
          </div>
          <div className="text-wrapper3">
            <img className="star-icon2" src={star} alt="Star" />
            필수 입력
          </div>
        </div>
      </StyledLabel>
      <StyledInput
        className="rectangle"
        type="text"
        placeholder="문의 내용을 입력하세요"
      />
    </MainContainer>
  );
}

export default QuestionSend;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 150px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const StyledLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  width: 100%;
  max-width: 800px;

  .label-container {
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 768px) {
      align-items: flex-start;
      margin-left: 10px;
    }
  }

  .text-wrapper {
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 40px;
    font-weight: 700;
    margin-top: 20px;
    margin-left: 70px;

    @media (max-width: 768px) {
      font-size: 30px;
      margin-left: -0px;
    }
  }

  .row-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;

    margin-top: 30px; /* 이전의 50px에서 30px로 변경 */
  }

  .text-wrapper2,
  .text-wrapper3 {
    display: flex;
    align-items: center;
    position: relative;
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-weight: 700;
    margin-top: 10px; /* 이전의 20px에서 10px로 변경 */
    margin-left: 70px;
    .star-icon {
      width: 12px;
      height: 12px;
      margin-bottom: 5px;
      margin-left: 5px;

      @media (max-width: 768px) {
        width: 10px;
        height: 10px;
        margin-left: 0px;
      }
    }

    .star-icon2 {
      width: 12px;
      height: 12px;
      margin-bottom: 5px;
      margin-right: 15px;

      @media (max-width: 768px) {
        width: 10px;
        height: 10px;
      }
    }
  }

  .text-wrapper2 {
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 15px;
      margin-left: 5px;
    }
  }

  .text-wrapper3 {
    font-size: 15px;

    @media (max-width: 768px) {
      font-size: 15px;
      margin-right: 0px;
    }
  }

  .img {
    margin-bottom: 200px;
  }
`;

const StyledLine = styled.div`
  width: 90%;
  max-width: 800px;
  margin-top: 10px;
  margin-left: 60px;
  animation: ${slideIn} 0.5s ease-out;

  .vector {
    width: 100%;
    height: 2px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 60px;
    margin-left: 0px;
  }
`;

const StyledInput = styled.input`
  width: 720px;
  height: 74px;
  margin-left: 50px;
  max-width: 800px;
  border: 2px solid #ffffff80;
  border-radius: 10px;
  background-color: transparent;
  color: white;

  font-size: 16px;
  outline: none;

  margin-top: 10px; /* 이전의 20px에서 10px로 변경 */

  ::placeholder {
    color: #ffffff80;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 60px;
    margin-right: 40px;
  }
`;
