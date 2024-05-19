import React from "react";
import styled from "styled-components";
import star from "../../../images/Question/star.png";

function QuestionSend6({ onFileChange }) {
  return (
    <MainContainer>
      <StyledLabel>
        <div className="row-wrapper">
          <div className="text-wrapper2">
            첨부파일
            <img className="star-icon" src={star} alt="Star" />
          </div>
        </div>
      </StyledLabel>

      <StyledFileInput
        className="file-input"
        type="file"
        placeholder="파일을 첨부하세요"
        onChange={onFileChange}
      />
      <StyledLabel2>
        <p className="text-wrapper">※ 500MB를 초과할 수 없습니다.</p>
        <p className="text-wrapper3">
          pdf, doc, docx, ppt, pptx, jpg, jpeg, png, zip, txt, gif 파일만
          가능합니다.
        </p>
      </StyledLabel2>
    </MainContainer>
  );
}

export default QuestionSend6;

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
  margin-left: 130px;
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
      margin-left: 10px;
    }
  }

  .text-wrapper2 {
    display: flex;
    align-items: center;
    position: relative;
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-weight: 700;
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
      margin-left: 10px;
    }
  }
`;

const StyledFileInput = styled.input`
  height: 74px;
  width: 735px;
  border: 2px solid #ffffff80;
  border-radius: 10px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  outline: none;
  margin-left: 50px;
  margin-top: 10px;
  text-align: center;
  line-height: 74px;

  ::file-selector-button {
    background-color: #ffffff80;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #000;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    width: 96%;
    height: 60px;
    margin-left: 10px;
    line-height: 60px;
  }
`;

const StyledLabel2 = styled.div`
  margin-top: 10px;
  margin-bottom: 50px;
  width: 100%;
  text-align: left;
  margin-left: 850px;
  .text-wrapper {
    color: #25f4eead;
    font-family: "Inter-Medium", Helvetica;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.2;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 12px;
      margin-left: -410px;
    }
  }

  .text-wrapper3 {
    color: #25f4eead;
    font-family: "Inter-Medium", Helvetica;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.2;
    margin: 0;
    margin-left: 15px;
    @media (max-width: 768px) {
      font-size: 12px;
      margin-left: -400px;
    }
  }
`;
