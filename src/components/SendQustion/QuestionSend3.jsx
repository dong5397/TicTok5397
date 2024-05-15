import React, { useState } from "react";
import styled from "styled-components";
import star from "../../../images/Question/star.png";

const emailDomains = [
  "직접 입력",
  "naver.com",
  "gmail.com",
  "nate.com",
  "daum.net",
  "korea.com",
  "hotmail.com",
];

function QuestionSend3() {
  const [selectedDomain, setSelectedDomain] = useState("");
  const [customDomain, setCustomDomain] = useState("");

  const handleDomainChange = (e) => {
    const value = e.target.value;
    if (value === "직접 입력") {
      setSelectedDomain("");
      setCustomDomain("");
    } else {
      setSelectedDomain(value);
      setCustomDomain("");
    }
  };

  const handleCustomDomainChange = (e) => {
    setSelectedDomain("");
    setCustomDomain(e.target.value);
  };

  return (
    <MainContainer>
      <StyledLabel>
        <div className="row-wrapper">
          <div className="text-wrapper2">
            이메일
            <img className="star-icon" src={star} alt="Star" />
          </div>
        </div>
      </StyledLabel>
      <InputContainer>
        <InputBox>
          <input className="rectangle" type="text" placeholder="example" />
        </InputBox>
        <InputDivider>@</InputDivider>
        <InputBox>
          {selectedDomain || customDomain ? (
            <input
              className="rectangle"
              type="text"
              placeholder="domain.com"
              value={selectedDomain || customDomain}
              onChange={handleCustomDomainChange}
              disabled={!!selectedDomain}
            />
          ) : (
            <input
              className="rectangle"
              type="text"
              placeholder="domain.com"
              onChange={handleCustomDomainChange}
            />
          )}
        </InputBox>
        <DomainSelector
          className="rectangle"
          value={selectedDomain || "직접 입력"}
          onChange={handleDomainChange}
        >
          {emailDomains.map((domain, index) => (
            <option key={index} value={domain}>
              {domain}
            </option>
          ))}
        </DomainSelector>
      </InputContainer>
    </MainContainer>
  );
}

export default QuestionSend3;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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

    @media (max-width: 768px) {
      padding: 0 20px;
    }

    @media (max-width: 480px) {
      padding: 0 10px;
    }
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
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

const InputBox = styled.div`
  height: 74px;
  width: 235px;

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
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 50px;
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
  width: 800px;

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

const DomainSelector = styled.select`
  height: 74px;
  width: 180px;
  border: 2px solid #ffffff80;
  border-radius: 10px;
  background-color: transparent;
  color: white;

  font-size: 16px;
  outline: none;
  box-sizing: border-box;

  option {
    background-color: #1f1f1f;
    color: white;
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
