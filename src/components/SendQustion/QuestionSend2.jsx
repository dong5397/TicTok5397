import React from "react";
import styled, { keyframes } from "styled-components";
import star from "../../../images/Question/star.png";

function QuestionSend2({ phoneNumber, onPhoneChange }) {
  const handleInputChange = (part, e) => {
    onPhoneChange(part, e.target.value);
  };

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
            id="part1"
            type="text"
            maxLength="3"
            placeholder="010"
            value={phoneNumber.part1}
            onChange={(e) => handleInputChange("part1", e)}
          />
        </InputBox>
        <InputDivider>-</InputDivider>
        <InputBox>
          <input
            className="rectangle"
            id="part2"
            type="text"
            maxLength="4"
            placeholder="1234"
            value={phoneNumber.part2}
            onChange={(e) => handleInputChange("part2", e)}
          />
        </InputBox>
        <InputDivider>-</InputDivider>
        <InputBox>
          <input
            className="rectangle"
            id="part3"
            type="text"
            maxLength="4"
            placeholder="5678"
            value={phoneNumber.part3}
            onChange={(e) => handleInputChange("part3", e)}
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

  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    margin-left: 1%;
  }
`;

const StyledLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  width: 100%;
  max-width: 800px;

  margin-left: 120px;
  .row-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;

    margin-top: 20px;

    @media (max-width: 768px) {
      margin-left: -12%;
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

    @media (max-width: 768px) {
      font-size: 30px;
      margin-left: -0px;
    }

    .star-icon {
      width: 12px;
      height: 12px;
      margin-bottom: 5px;
      margin-left: 5px;

      @media (max-width: 768px) {
        width: 10px;
        height: 10px;
        margin-left: -0;
      }
    }
  }

  .text-wrapper2 {
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 18px;
      margin-left: -0;
    }
  }
`;

const InputBox = styled.div`
  height: 74px;
  width: 225px;

  .rectangle {
    border: 2px solid #ffffff80;
    border-radius: 10px;
    height: 100%;
    width: 100%;
    padding-left: 10px;
    background-color: transparent;
    color: white;

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
    margin-left: -0px;
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
    width: 97%;
    height: 60px;
    margin-left: 1%;
  }
`;

const InputDivider = styled.span`
  color: white;
  font-size: 24px;
`;
