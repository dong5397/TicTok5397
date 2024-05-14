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
  }

  .text-wrapper2 {
    display: flex;
    align-items: center;
    position: relative;
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-weight: 700;
    margin-top: 20px;
    margin-right: 90px;
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
      font-size: 30px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
`;
const InputBox = styled.div`
  height: 74px;
  width: 222px;

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
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 10px;
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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const InputDivider = styled.span`
  color: white;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
