import React from "react";
import styled from "styled-components";
import Img1 from "../../../images/Home/Dot2.png";
import line from "../../../images/Home/line.png";
import StyledBox8 from "../Box/StyledBox8";
import StyleBox2 from "../Box/StyleBox2";
import StyleBox2_2 from "../Box/StyleBox2_2";
import StyleBox2_3 from "../Box/StyleBox2_3";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 20px;
  margin-top: 100px;
  margin-bottom: 200px;
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
    gap: 10px; /* 아이콘과 텍스트 사이에 간격 조정 */
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
  width: 70%;
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

const BoxContainer = styled.div`
  margin-top: 30px;
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Home10() {
  return (
    <MainContainer>
      <StyledLabel>
        <div className="label-container">
          <Img src={Img1} alt="Icon" />
          <div className="text-wrapper">이펙트 하우스 어워즈 시상</div>
        </div>
        <Styleline>
          <img className="vector" src={line} alt="Line" />
        </Styleline>
      </StyledLabel>
      <StyledBox8 />
      <BoxContainer>
        <StyleBox2 />
        <StyleBox2_2 />
        <StyleBox2_3 />
      </BoxContainer>
    </MainContainer>
  );
}

export default Home10;
