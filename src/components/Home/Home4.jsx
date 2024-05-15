import React from "react";
import styled from "styled-components";
import img1 from "../../../images/Home/q.png";
import line from "../../../images/Home/line.png";
import StyleBox2 from "../Box/StyledBox2";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 20px;
`;

const StyledLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  width: 100%;
  max-width: 800px;

  & .label-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & .text-wrapper {
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-top: 20px;
  }
`;

const Styleline = styled.div`
  width: 90%;
  max-width: 800px;
  margin-top: 10px;
  margin-left: 60px;

  & .vector {
    width: 100%;
    height: 2px;
  }
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 20px;
`;

function Home4() {
  return (
    <MainContainer>
      <StyledLabel>
        <div className="label-container">
          <Img src={img1} alt="Icon" />
          <div className="text-wrapper">대상 모집은 어떻게 되나요?</div>
        </div>
        <Styleline>
          <img className="vector" src={line} alt="Line" />
        </Styleline>
      </StyledLabel>
      <StyleBox2 />
    </MainContainer>
  );
}

export default Home4;
