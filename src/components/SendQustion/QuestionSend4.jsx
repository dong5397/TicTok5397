import React from "react";
import styled from "styled-components";
import star from "../../../images/Question/star.png";

function QuestionSend4({ title, onTitleChange }) {
  return (
    <MainContainer>
      <StyledLabel>
        <div className="row-wrapper">
          <div className="text-wrapper2">
            제목
            <img className="star-icon" src={star} alt="Star" />
          </div>
        </div>
      </StyledLabel>
      <StyledInput
        className="rectangle"
        type="text"
        value={title}
        placeholder="제목을 입력하세요"
        onChange={onTitleChange}
      />
    </MainContainer>
  );
}

export default QuestionSend4;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-left: 130px;
  max-width: 800px;
  @media (max-width: 768px) {
    font-size: 18px;
    margin-right: 130px;
  }
  .row-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;

    @media (max-width: 768px) {
      margin-left: 15px;
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
    font-size: 20px;

    .star-icon {
      width: 12px;
      height: 12px;
      margin-bottom: 5px;
      margin-left: 5px;

      @media (max-width: 768px) {
        width: 10px;
        height: 10px;
      }
    }

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

const StyledInput = styled.input`
  height: 74px;
  width: 720px;
  max-width: 100%;
  border: 2px solid #ffffff80;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  font-size: 16px;
  outline: none;
  margin-top: 10px;
  padding-left: 10px;
  margin-left: 50px;
  ::placeholder {
    color: #ffffff80;
  }

  @media (max-width: 768px) {
    width: 94%;
    height: 60px;
    margin-right: 50px;
  }
`;
