import React from "react";
import styled, { keyframes } from "styled-components";
import star from "../../../images/Question/star.png";

function QuestionSend2() {
  return (
    <MainContainer>
      <StyledLabel>
        <div className="row-wrapper">
          <div className="text-wrapper2">
            전화번호
            <img className="star-icon" src={star} alt="Star" />
          </div>
        </div>
      </StyledLabel>
      <InputContainer>
        <InputBox>
          <input
            className="rectangle"
            type="text"
            maxLength="3"
            placeholder="010"
          />
        </InputBox>
        <InputDivider>-</InputDivider>
        <InputBox>
          <input
            className="rectangle"
            type="text"
            maxLength="4"
            placeholder="1234"
          />
        </InputBox>
        <InputDivider>-</InputDivider>
        <InputBox>
          <input
            className="rectangle"
            type="text"
            maxLength="4"
            placeholder="5678"
          />
        </InputBox>
      </InputContainer>
    </MainContainer>
  );
}

export default QuestionSend2;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;

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
  max-width: 800px;

  .row-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;

    margin-top: 20px;

    @media (max-width: 768px) {
    }

    @media (max-width: 480px) {
      margin-top: 10px;
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

const InputBox = styled.div`
  height: 74px;
  width: 215px;

  .rectangle {
    border: 2px solid #ffffff80;
    border-radius: 10px;
    height: 100%;
    width: 100%;
    background-color: transparent;
    color: white;
    padding: 0 15px;
    font-size: 16px;
    outline: none;
    box-sizing: border-box;

    ::placeholder {
      color: #ffffff80;
    }
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

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-left: 50px;
  max-width: 800px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
    margin-left: 0;
    width: 100%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 5px;
    margin-left: 0;
    width: 100%;
  }
`;

const InputDivider = styled.span`
  color: white;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
