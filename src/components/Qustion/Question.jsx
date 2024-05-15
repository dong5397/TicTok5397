import React, { useState } from "react";
import styled from "styled-components";
import Faq from "../../../images/Question/faq.png";
import on from "../../../images/Question/on.png";
import off from "../../../images/Question/off.png";

const questions1 = [
  {
    id: 1,
    question: "Q. 행사 참가 대상은 누구인가요?",
    answer:
      "행사는 한국에 거주하는 만 18세부터 26세까지의 대학생을 포함하여 누구나 참가할 수 있습니다. 대학생이 아니더라도 AR 필터 분야에 관심 있는 분들이 환영됩니다.",
  },
  {
    id: 2,
    question: "Q. 참가 신청은 어떻게 하나요?",
    answer:
      "참가 신청은 해당 학회의 홈페이지에서 가능합니다. 신청에는 학교, 학과, 이름, 연락처, 이메일, 틱톡 아이디 등의 정보가 필요하며, 등록 기간은 5월 25일부터 선착순 200명이 모집될 때까지입니다.",
  },
  {
    id: 3,
    question: "Q. 행사 기간과 일정은 어떻게 되나요?",
    answer:
      "행사는 7월부터 9월까지 진행되며, 오리엔테이션과 교육은 각 지역별로 서울, 대전, 광주에서 개최됩니다. 행사 일정은 7월 6일부터 9월 1일까지이며, 매주 화요일에 교육 동영상과 미션 내역이 공지됩니다.",
  },
  {
    id: 4,
    question: "Q. 행사 혜택은 어떻게 되나요?",
    answer:
      "행사 기간 중 발행한 필터를 평가하여 시상합니다. 1등부터 3등까지의 수상자들은 상패와 상금을 받으며, 우수상 수상자들은 상장과 상금을 받습니다. 수상 기준은 발행한 필터의 글로벌 사용량, 조회수, 참여도 등으로 결정됩니다.",
  },
  {
    id: 5,
    question: "Q. 시상은 언제, 어떻게 진행되나요?",
    answer:
      "시상은 2023년 11월경에 이펙트 하우스 어워즈로 진행될 예정입니다. 상세 일정은 추후 공지될 예정입니다.",
  },
];

function Question() {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleQuestion = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((item) => item !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  return (
    <MainContainer>
      <StyledImage>
        <img className="img" alt="Untitled" src={Faq} />
      </StyledImage>
      {questions1.map((q) => (
        <QuestionContainer key={q.id}>
          <QuestionBox
            onClick={() => toggleQuestion(q.id)}
            isOpen={expandedIds.includes(q.id)}
          >
            <QuestionTitle>
              {q.question}
              {expandedIds.includes(q.id) ? (
                <img src={on} alt="on" />
              ) : (
                <img src={off} alt="off" />
              )}
            </QuestionTitle>
            <Answer isOpen={expandedIds.includes(q.id)}>{q.answer}</Answer>
          </QuestionBox>
          <Divider />
        </QuestionContainer>
      ))}
    </MainContainer>
  );
}

export default Question;

const MainContainer = styled.div`
  width: 100%;
  margin: 20px;

  @media (min-width: 480px) {
    width: 90%;
    margin: 40px auto;
  }

  @media (min-width: 768px) {
    width: 800px;
    margin: 200px auto;
    margin-top: 100px;
    border-radius: 10px;
    margin-bottom: 30px;
  }
`;

const QuestionContainer = styled.div`
  margin-top: 20px;
`;

const QuestionBox = styled.div`
  cursor: pointer;
  padding: 20px;

  @media (min-width: 480px) {
    padding-top: 50px;
  }

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const QuestionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  color: white; /* 질문 텍스트 색상 */
  font-size: 20px;
  margin-top: 10px;
  @media (min-width: 480px) {
    font-size: 16px;
  }
`;

const Answer = styled.div`
  padding: 20px 0;
  margin-top: 30px;
  color: #25f4ee;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};

  @media (min-width: 480px) {
    padding: 10px 0;
    font-size: 14px;
  }
`;

const Divider = styled.div`
  width: 100%;
  margin-left: 20px;
  height: 3px;
  background: linear-gradient(
    to right,
    rgba(16, 216, 196, 0.37),
    rgba(233, 17, 60, 0.8)
  );
`;

const StyledImage = styled.div`
  margin-left: 15px;
  margin-bottom: 40px;
  padding-top: 150px;
`;
