import styled, { keyframes } from "styled-components";

import Main from "../components/Apply/Main";

function Apply() {
  return (
    <Background>
      <MainContainer>
        <Main />
      </MainContainer>
    </Background>
  );
}

export default Apply;

const Background = styled.div`
  background-color: white;
  width: 100%;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 100%;

  width: 100%;
  margin: 0 auto;

  flex-direction: column;

  @media (max-width: 768px) {
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

const TitleContainer = styled.div`
  overflow: visible; /* 컨텐츠가 넘어가는 경우 스크롤이 보임 */
`;

const ContentsContainer = styled.div`
  overflow: visible; /* 컨텐츠가 넘어가는 경우 스크롤이 보임 */
`;
