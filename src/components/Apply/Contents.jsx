import styled from "styled-components";
import icon from "../../../images/Apply/caution.png";
import BackIcon from "../../../images/Apply/ball.svg";

import { useState, createContext } from "react";

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
    <Container>
      <Section1>
        <TitleLabel>
          <div className="text-wrapper">등록기간</div>
          <Dot src={BackIcon} alt="DotIcon" />
        </TitleLabel>
        <SubLabel>
          <div className="text-wrapper">5월 6일(월)부터 6월 16일(일)까지</div>
        </SubLabel>
      </Section1>

      <Section2>
        <TitleLabel>
          <div className="text-wrapper">대상</div>
          <Dot2 src={BackIcon} alt="DotIcon" />
        </TitleLabel>
        <SubLabel>
          <div className="text-wrapper">
            한국에 거주하는 분(18세부터 26세까지)
          </div>
        </SubLabel>
      </Section2>

      <Section3>
        <div className="container">
          <SeoulLabel>
            <div className="text-wrapper">서울/경기</div>
            <div className="text-wrapper">
              선착순 100명(1회차 50명, 2회차, 50명)
            </div>
          </SeoulLabel>
          <EtcLocationLabel>
            <div className="text-wrapper">대전</div>
            <div className="text-wrapper">선착순 50명</div>
          </EtcLocationLabel>
          <EtcLocationLabel>
            <div className="text-wrapper">광주</div>
            <div className="text-wrapper">선착순 50명</div>
          </EtcLocationLabel>
          <EtcLocationLabel>
            <div className="text-wrapper">
              ※ 팀 참가 인원 포함 총 200명 모집
            </div>
          </EtcLocationLabel>
        </div>
      </Section3>
      <Section4>
        <TitleLabel>
          <div className="text-wrapper">참가방법</div>
          <Dot src={BackIcon} alt="DotIcon" />
        </TitleLabel>
        <SubLabel>
          <div className="text-wrapper">
            개인 또는 2인팀(디자이너 1인, 개발자 1인)
          </div>
        </SubLabel>
      </Section4>
      <Section5>
        <TitleLabel>
          <div className="text-wrapper">신청지역</div>
          <Dot src={BackIcon} alt="DotIcon" />
        </TitleLabel>
        <StyledBox>
          <Button
            className={selectedButton === "서울" ? "choice" : "default"}
            onClick={() => handleButtonClick("서울")}
          >
            <h2>서울</h2>
          </Button>
          <Button
            className={selectedButton === "대전" ? "choice" : "default"}
            onClick={() => handleButtonClick("대전")}
          >
            <h2>대전</h2>
          </Button>
          <Button
            className={selectedButton === "광주" ? "choice" : "default"}
            onClick={() => handleButtonClick("광주")}
          >
            <h2>광주</h2>
          </Button>
        </StyledBox>
      </Section5>
      <Section6>
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
      </Section6>
    </Container>
  );
}

export default Contents;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const Section1 = styled.section`
  display: flex;
  width: 587px;
  gap: 15px;
  flex-direction: column;
  margin-bottom: 100px;
`;

const Section2 = styled.section`
  display: flex;
  width: 587px;
  gap: 15px;
  flex-direction: column;
  margin-bottom: 50px;

  & .text-wrapper {
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 35px;
    font-weight: 600;
    white-space: nowrap;
  }
`;

const Section3 = styled.section`
  display: flex;
  width: 587px;
  gap: 15px;
  flex-direction: column;
  height: 200px;
  margin-bottom: 50px;

  & .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const Section4 = styled.section`
  display: flex;
  width: 587px;

  flex-direction: column;
  height: 200px;
`;

const Section5 = styled.section`
  display: flex;
  width: 587px;
  gap: 55px;
  flex-direction: column;
  height: 200px;
  margin-bottom: 50px;
`;

const Section6 = styled.section`
  display: flex;
  width: 256px;
  gap: 55px;
  flex-direction: column;
`;

const StyledBox = styled.div`
  display: flex;
  gap: 20px;

  & .default {
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
  }

  & .choice {
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
  }
`;

const Button = styled.button`
  height: 69px;
  width: 176px;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ className }) =>
    className === "choice" ? "#fe2c55" : "#ffffff"};
  border: 2px solid #fe2c55;
  cursor: pointer;

  h2 {
    color: ${({ className }) =>
      className === "choice" ? "#ffffff" : "#000000"};
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 25px;
    font-weight: 600;
  }


    h2 {
      color: #ffffff;
    }
  }
`;

const TitleLabel = styled.div`
  display: flex;
  width: 200px;
  height: 50px;
  flex-direction: row;
  align-items: flex-start;

  & .text-wrapper {
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 35px;
    font-weight: 600;
    white-space: nowrap;
  }
`;

const SubLabel = styled.div`
  display: flex;
  width: 600px;
  height: 80px;
  gap: 20px;
  flex-direction: row;
  align-items: flex-start;

  & .text-wrapper {
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 30px;
    font-weight: 600;
    white-space: nowrap;
  }
`;

const SeoulLabel = styled.div`
  display: flex;
  width: 82px;
  height: 24px;
  gap: 20px;
  flex-direction: row;
  align-items: flex-start;

  & .text-wrapper {
    color: #ffffffad;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;
    white-space: nowrap;

    @media (max-width: 768px) {
      font-size: 25px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
  }
`;

const EtcLocationLabel = styled.div`
  display: flex;
  width: 600px;
  height: 100%;
  gap: 60px;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }

  & .text-wrapper {
    color: #ffffffad;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;
    white-space: nowrap;

    @media (max-width: 768px) {
      font-size: 25px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
`;

const EtcLabel = styled.div`
  display: flex;
  width: 600px;
  height: 80px;
  gap: 20px;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }

  & .text-wrapper {
    color: #ffffffad;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;
    white-space: nowrap;

    @media (max-width: 768px) {
      font-size: 25px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
  }
`;
const Dot = styled.img`
  width: 26px;
  height: 26px;
  bottom: 24px;
  right: 150px;
  position: relative;
`;

const Dot2 = styled.img`
  width: 26px;

  bottom: 20px;
  right: 90px;
  position: relative;
`;
