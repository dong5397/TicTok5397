import React from "react";
import styled from "styled-components";
import star from "../../../images/Question/star.png";

function QuestionSend5({ content, onContentChange }) {
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
      <StyledTextarea
        className="rectangle"
        placeholder="내용을 입력하세요"
        value={content}
        onChange={onContentChange}
      />
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
    margin-left: 3%;
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

    margin-top: 30px;

    @media (max-width: 768px) {
      margin-left: -14%;
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
    }
  }

  .text-wrapper2 {
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

const StyledTextarea = styled.textarea`
  height: 350px;
  width: 720px;
  max-width: 100%;
  border: 2px solid #ffffff80;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 16px;
  outline: none;
  margin-left: 50px;
  margin-top: 10px;
  resize: none;

  ::placeholder {
    color: #ffffff80;
  }

  @media (max-width: 768px) {
    width: 95%;
    height: 60px;
    margin-left: -1%;
  }
`;
