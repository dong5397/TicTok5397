import React, { useState, createContext } from "react";
import styled from "styled-components";

import BackIcon from "../../../images/Apply/ball.png";

import Radio from "./Radio";
import RadioGroup from "./RadioGruop";
import TestBox from "../Box/StyleBox2_2";
import JoinButton from "./JoinButton";

export const RadioContext = createContext({});

function Contents() {
  const [selectedButton, setSelectedButton] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("Team");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    console.log(buttonName);
  };

  const handleRadioChange = (value) => {
    setSelectedRadio(value);
    console.log(value);
  };

  const radioContextValue = { selectedRadio, handleRadioChange };

  return (
    <>
      <Section>
        <Dot src={BackIcon} alt="DotIcon" />
        <TitleContainer>
          <TitleLabel>
            <div className="text-wrapper">등록기간</div>
          </TitleLabel>
        </TitleContainer>
        <SubContainer>
          <SubLabel>
            <div className="text-wrapper">5월 6일(월)부터 6월 16일(일)까지</div>
          </SubLabel>
        </SubContainer>
      </Section>

      <Section>
        <Dot src={BackIcon} alt="DotIcon" />
        <TitleContainer>
          <TitleLabel>
            <div className="text-wrapper">대상</div>
          </TitleLabel>
        </TitleContainer>
        <SubContainer>
          <SubLabel>
            <div className="text-wrapper">
              한국에 거주하는 분(18세부터 26세까지)
            </div>
          </SubLabel>
        </SubContainer>
      </Section>

      <Section>
        <TitleContainer>
          <div className="location_container">
            <SubSection className="seoul">
              <div className="text-wrapper">서울/경기</div>
              <div className="text-wrapper">
                선착순 100명(1회차 50명, 2회차, 50명)
              </div>
            </SubSection>
            <SubSection className="daejeon">
              <div className="text-wrapper">대전</div>
              <div className="text-wrapper">선착순 50명</div>
            </SubSection>
            <SubSection className="gwangju">
              <div className="text-wrapper">광주</div>
              <div className="text-wrapper">선착순 50명</div>
            </SubSection>
            <SubSection className="note">
              <div className="text-wrapper">
                ※ 팀 참가 인원 포함 총 200명 모집
              </div>
            </SubSection>
          </div>
        </TitleContainer>
      </Section>

      <Section>
        <Dot src={BackIcon} alt="DotIcon" />
        <TitleContainer>
          <TitleLabel>
            <div className="text-wrapper">참가방법</div>
          </TitleLabel>
        </TitleContainer>
        <SubContainer>
          <SubLabel>
            <div className="text-wrapper">
              개인 또는 2인팀(디자이너 1인, 개발자 1인)
            </div>
          </SubLabel>
        </SubContainer>
      </Section>

      <ButtonSection>
        <TitleContainer>
          <TitleLabel>
            <div className="text-wrapper">신청지역</div>
          </TitleLabel>
        </TitleContainer>
        <StyledBox>
          <LocationButton
            className={selectedButton === "서울" ? "choice" : "default"}
            onClick={() => handleButtonClick("서울")}
          >
            <h2>서울</h2>
          </LocationButton>
          <LocationButton
            className={selectedButton === "대전" ? "choice" : "default"}
            onClick={() => handleButtonClick("대전")}
          >
            <h2>대전</h2>
          </LocationButton>
          <LocationButton
            className={selectedButton === "광주" ? "choice" : "default"}
            onClick={() => handleButtonClick("광주")}
          >
            <h2>광주</h2>
          </LocationButton>
        </StyledBox>
      </ButtonSection>

      <Section>
        <RadioContext.Provider value={radioContextValue}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <RadioGroup label="참가 유형">
              <Radio name="contact" value="Team">
                팀 참가
              </Radio>
              <Radio name="contact" value="Indv">
                개인 참가
              </Radio>
            </RadioGroup>
            <TestBox />
            <JoinButton
              selectedButton={selectedButton}
              selectedRadio={selectedRadio}
            />
          </form>
        </RadioContext.Provider>
      </Section>
    </>
  );
}

export default Contents;

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  gap: 10px;
  align-items: center;
  width: 100%;
  overflow: hidden;

  /* 작은 태블릿 */
  @media (min-width: 481px) and (max-width: 767px) {
    margin-bottom: 50px;
  }
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const ButtonSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 20px;
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    gap: 15px;
  }

  /* 작은 태블릿 */
  @media (min-width: 481px) and (max-width: 767px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  width: 587px;
  align-items: center;
  gap: 10px;

  /* 작은 태블릿 */
  @media (min-width: 481px) and (max-width: 767px) {
    height: auto;
    width: 292px;
  }

  .location_container {
    @media (max-width: 425px) {
      margin-top: 30px;
      margin-bottom: 5px;
    }
  }

  @media (max-width: 425px) {
    width: 255px;
    height: auto;
  }
`;

const TitleLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .text-wrapper {
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 35px;
    font-weight: 600;

    /* 작은 태블릿 */
    @media (min-width: 481px) and (max-width: 767px) {
      font-size: 40px;
    }
    /* 태블릿 */
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 42px;
    }

    @media (max-width: 767px) {
      font-size: 32px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
`;

const SubContainer = styled.div`
  display: flex;
  width: 587px;
  align-items: center;

  /* 작은 태블릿 */
  @media (min-width: 481px) and (max-width: 767px) {
    height: auto;
    width: 292px;
  }

  @media (max-width: 425px) {
    height: auto;
    width: 255px;
  }
`;

const SubLabel = styled.div`
  .text-wrapper {
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 23px;
    font-weight: 600;

    /* 태블릿 */
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 28px;
    }

    /* 작은 태블릿 */
    @media (min-width: 481px) and (max-width: 767px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

const SubSection = styled.div`
  margin-bottom: 5px;
  display: flex;
  gap: ${({ className }) =>
    className === "seoul"
      ? "50px"
      : className === "daejeon" || className === "gwangju"
      ? "85px"
      : "10px"};

  /* 데스크탑 */
  @media (min-width: 1024px) {
    gap: ${({ className }) =>
      className === "seoul"
        ? "25px"
        : className === "daejeon" || className === "gwangju"
        ? "66px"
        : "20px"};
  }

  /* 태블릿 */
  @media (min-width: 768px) and (max-width: 1024px) {
    gap: ${({ className }) =>
      className === "seoul"
        ? "25px"
        : className === "daejeon" || className === "gwangju"
        ? "66px"
        : "20px"};
  }

  /* 작은 태블릿 */
  @media (min-width: 481px) and (max-width: 767px) {
    gap: ${({ className }) =>
      className === "seoul"
        ? "43px"
        : className === "daejeon" || className === "gwangju"
        ? "66px"
        : "20px"};
  }

  @media (max-width: 480px) {
    gap: ${({ className }) =>
      className === "seoul"
        ? "46px"
        : className === "daejeon" || className === "gwangju"
        ? "66px"
        : "20px"};
  }

  .text-wrapper {
    color: #ffffffad;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 18px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 12px;
    }

    /* 작은 태블릿 */
    @media (min-width: 481px) and (max-width: 767px) {
      font-size: 10px;
    }

    @media (max-width: 480px) {
      font-size: 9px;
    }
  }
`;

const StyledBox = styled.div`
  display: flex;
  gap: 10px;

  .default {
    background-color: black;
    border: 2px solid #fe2c55;
    border-radius: 10px;
    height: 69px;
    width: 176px;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      color: #ffffff;
      font-family: "Inter-SemiBold", Helvetica;
      font-size: 25px;
      font-weight: 600;
    }

    /* 작은 태블릿 */
    @media (min-width: 481px) and (max-width: 767px) {
      width: 90px;
      height: 54px;

      h2 {
        font-size: 20px;
      }
    }

    @media (max-width: 480px) {
      width: 86px;
      height: 39px;

      h2 {
        font-size: 15px;
      }
    }
  }

  .choice {
    background-color: #fe2c55;
    border: 2px solid #fe2c55;
    border-radius: 10px;
    height: 69px;
    width: 176px;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      color: #ffffff;
      font-family: "Inter-SemiBold", Helvetica;
      font-size: 25px;
      font-weight: 600;
    }

    @media (max-width: 480px) {
      width: 96px;
      height: 39px;

      h2 {
        font-size: 15px;
      }
    }
  }
`;

const LocationButton = styled.button`
  height: 69px;
  width: 176px;
  border: 2px solid #fe2c55;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ className }) =>
    className === "choice" ? "#fe2c55" : "#ffffff"};
  cursor: pointer;

  h2 {
    color: ${({ className }) =>
      className === "choice" ? "#ffffff" : "#000000"};
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 25px;
    font-weight: 600;
  }
`;

const Dot = styled.img`
  width: 26px;
  height: 26px;
  position: relative;
  right: 300px;
  top: 20px;

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
    right: 135px;
    top: 20px;
  }
`;
