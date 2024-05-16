import React from "react";
import styled, { keyframes } from "styled-components";
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
      <StyledTextarea className="rectangle" placeholder="내용을 입력하세요" />
    </MainContainer>
  );
}

export default QuestionSend5;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
  }

  @media (max-width: 480px) {
    height: auto;
  }
`;

const StyledLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  width: 100%;
  width: 800px;

  .row-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 70px;
    margin-top: 30px;

    @media (max-width: 768px) {
      padding: 0 20px;
    }

    @media (max-width: 480px) {
      padding: 0 10px;
      margin-top: 20px;
    }
  }

  .text-wrapper2 {
    display: flex;
    align-items: center;
    position: relative;
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-weight: 700;
    margin-top: 10px;

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
  }

  .text-wrapper2 {
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

const StyledTextarea = styled.textarea`
  height: 350px;
  width: 700px;
  max-width: 100%;
  border: 2px solid #ffffff80;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  padding: 15px;
  font-size: 16px;
  outline: none;
  margin-left: 50px;
  margin-top: 10px;
  resize: none;

  ::placeholder {
    color: #ffffff80;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
    margin-left: 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 200px;
    margin-left: 10px;
  }
`;
