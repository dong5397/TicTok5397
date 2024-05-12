import React, { useState } from "react";
import styled from "styled-components";

const questions1 = [
  {
    id: 1,
    question: "질문 1",
    answer: "답변 1",
  },
  {
    id: 2,
    question: "질문 2",
    answer: "답변 2",
  },
  {
    id: 3,
    question: "질문 3",
    answer: "답변 3",
  },
];
const questions2 = [
  {
    id: 4,
    question: "질문 1",
    answer: "답변 1",
  },
  {
    id: 5,
    question: "질문 2",
    answer: "답변 2",
  },
  {
    id: 6,
    question: "질문 3",
    answer: "답변 3",
  },
];

function Question() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleQuestion = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      <MainContainer>
        <HeaderText>
          {"     "}
          1. 질문
        </HeaderText>
        {questions1.map((q, index) => (
          <QuestionContainer key={q.id}>
            <QuestionBox
              onClick={() => toggleQuestion(q.id)}
              isOpen={expandedId === q.id}
            >
              <QuestionTitle>
                {q.question}
                {expandedId === q.id ? " -" : " +"}
              </QuestionTitle>
              <Answer isOpen={expandedId === q.id}>{q.answer}</Answer>
            </QuestionBox>
            {index !== questions1.length - 1 && <Divider />}
          </QuestionContainer>
        ))}
      </MainContainer>
      <MainContainer>
        <HeaderText>
          {"     "}
          2. 질문
        </HeaderText>
        {questions2.map((q, index) => (
          <QuestionContainer key={q.id}>
            <QuestionBox
              onClick={() => toggleQuestion(q.id)}
              isOpen={expandedId === q.id}
            >
              <QuestionTitle>
                {q.question}
                {expandedId === q.id ? " -" : " +"}
              </QuestionTitle>
              <Answer isOpen={expandedId === q.id}>{q.answer}</Answer>
            </QuestionBox>
            {index !== questions2.length - 1 && <Divider />}
          </QuestionContainer>
        ))}
      </MainContainer>
    </div>
  );
}

export default Question;

const HeaderText = styled.div`
  font-size: 30px;
  color: white;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid white; /* 구분선 */
  margin-bottom: 20px; /* 하단 마진 추가 */
  margin-left: 20px;
  width: 720px; /* MainContainer와 동일한 너비로 설정 */
`;
const MainContainer = styled.div`
  width: 800px;
  margin: 200px auto;
  margin-top: 100px;
  background-color: #434343;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const QuestionContainer = styled.div``;

const QuestionBox = styled.div`
  cursor: pointer;
  padding: 20px;
`;

const QuestionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  color: white; /* 질문 텍스트 색상 */
  font-size: 20px;
`;

const Answer = styled.div`
  padding: 20px 0;
  color: white;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const Divider = styled.div`
  width: calc(100% - 40px);
  height: 1px;
  background-color: white;
  margin: 0 auto;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;
