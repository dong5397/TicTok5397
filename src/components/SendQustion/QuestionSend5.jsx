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

function QuestionSend5() {
  return (
    <MainContainer>
      <StyledLabel>
        <div className="row-wrapper">
          <div className="text-wrapper2">
            내용
            <img className="star-icon" src={star} alt="Star" />
          </div>
        </div>
      </StyledLabel>
      <StyledInput
        className="rectangle"
        type="text"
        placeholder="내용을 입력하세요"
      />
    </MainContainer>
  );
}

export default QuestionSend5;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }

  @media (max-width: 480px) {
    height: auto;
    padding: 10px;
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
    }

    @media (max-width: 480px) {
      align-items: flex-start;
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
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  .row-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 70px;
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

    .star-icon {
      width: 12px;
      height: 12px;
      margin-bottom: 5px;
      margin-left: 5px;

      @media (max-width: 768px) {
        width: 10px;
        height: 10px;
      }

      @media (max-width: 480px) {
        width: 8px;
        height: 8px;
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

      @media (max-width: 480px) {
        width: 8px;
        height: 8px;
      }
    }
  }

  .text-wrapper2 {
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 30px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  .text-wrapper3 {
    font-size: 15px;
    margin-right: 90px;
    @media (max-width: 768px) {
      font-size: 30px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  .img {
    margin-bottom: 200px;
  }
`;

const StyledInput = styled.input`
  height: 350px;
  width: 680px;
  border: 2px solid #ffffff80;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  padding: 0 15px;
  font-size: 16px;
  outline: none;
  margin-left: 50px;
  margin-top: 10px; /* 이전의 20px에서 10px로 변경 */

  ::placeholder {
    color: #ffffff80;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 50px;
  }
`;
