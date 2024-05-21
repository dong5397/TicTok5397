import React from "react";
import styled from "styled-components";
import star from "../../../images/Question/star.png";

function QuestionSend5({ content, onContentChange }) {
  return (
    <MainContainer>
      <QuestionBox>
        <StyledLabel>
          <div className="row-wrapper">
            <div className="text-wrapper2">
              문의 내용
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
      </QuestionBox>
    </MainContainer>
  );
}

export default QuestionSend5;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const QuestionBox = styled.div`
  width: 761px;
  @media (max-width: 476px) {
    max-width: 437px;
  }
  @media (max-width: 436px) {
    max-width: 387px;
  }

  @media (max-width: 375px) {
    width: 337px;
  }
`;

const StyledLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  width: 100%;

  .row-wrapper {
    display: flex;
    justify-content: space-between;
    width: 761px;
    height: 28px;

    margin-top: 48px;

    @media (max-width: 435px) {
      margin-top: 44px;
    }
  }

  .text-wrapper2 {
    width: 120px;
    height: 28px;

    display: flex;
    align-items: center;
    position: relative;
    align-items: flex-start;
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-weight: 700;
    margin-top: 10px;

    @media (max-width: 768px) {
      font-size: 30px;
      margin-left: -0px;
    }

    .star-icon {
      width: 10px;
      height: 10px;
      margin-bottom: 5px;
      margin-left: 5px;

      @media (max-width: 768px) {
        width: 9px;
        height: 9px;
      }
    }
  }

  .text-wrapper2 {
    font-size: 23px;

    @media (max-width: 435px) {
      font-size: 19px;
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

  padding-top: 10px;
  outline: none;
  margin-top: 36px;
  resize: none;

  &::placeholder {
    color: #ffffff80;
    font-size: 24px; /* 적절한 크기로 조정 */
    padding-left: 10px;

    @media (max-width: 435px) {
      font-size: 19px;
      padding-left: 5px;
    }
  }
  @media (max-width: 475px) {
    width: 405px;
    height: 237px;
  }
  @media (max-width: 435px) {
    width: 365px;
    height: 194px;
  }

  @media (max-width: 375px) {
    width: 322px;
    height: 171px;
  }
`;
