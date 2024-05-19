import styled, { keyframes } from "styled-components";
import React, { useEffect } from "react";
import Title from "../components/Apply/layout/Title";
import Contents from "../components/Apply/layout/Contents";

function Apply() {
  useEffect(() => {
    // 페이지가 로드될 때 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ContentContainer>
        <Title />
        <Contents />
      </ContentContainer>
    </div>
  );
}

export default Apply;

const ContentContainer = styled.div`
  max-width: 780px;
  height: 100%;
  margin: 0 auto;
  background-color: black;
`;
