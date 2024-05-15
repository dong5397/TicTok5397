import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Home2Image from "../../../images/Home/Home2.png";
import TicTokImage from "../../../images/Home/TicTok.png";
import MakertoneImage from "../../../images/Home/Home3.png";

function Home2() {
  const textRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, options);

    textRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      textRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <MainContainer>
      <StyledBox>
        <img className="mask-group" alt="Mask group" src={Home2Image} />
      </StyledBox>
      <Content>
        <img className="tiktok-image" alt="TicTok Logo" src={TicTokImage} />
        <br />
        <img className="makertone-image" alt="Makertone" src={MakertoneImage} />
      </Content>
      <StyledLabel>
        <div className="flexcontainer">
          <p className="text" ref={(el) => (textRefs.current[0] = el)}>
            <span className="text-wrapper">
              대학생 AR 특수 효과 산업 이해도 상승, AR 필터 제작 기술 습득, 취업
              옵션 확장 지원
              <br />
            </span>
          </p>
          <p className="text" ref={(el) => (textRefs.current[1] = el)}>
            <span className="text-wrapper">
              틱톡의 Effect House 홍보, AR 필터 크리에이터 영입 및 육성
            </span>
          </p>
          <p className="text" ref={(el) => (textRefs.current[2] = el)}>
            <span className="text-wrapper">
              프로젝트 완료 후 지속적으로 틱톡 Effect House 프로그램 필터
              크리에이터 활동
            </span>
          </p>
        </div>
      </StyledLabel>
    </MainContainer>
  );
}

export default Home2;

const StyledBox = styled.div`
  position: absolute; /* 배경 이미지를 절대 위치로 고정 */
  top: 0;
  left: 0;

  width: 100%;
  height: 80%;
  z-index: 0;

  & .mask-group {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* 위쪽 그라데이션 */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0)
    );
    z-index: 1;
  }

  /* 아래쪽 그라데이션 */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
    z-index: 1;
  }
`;

const Content = styled.div`
  position: relative; /* 컨텐츠를 백그라운드 위로 올리기 위해 상대 위치 설정 */
  z-index: 2;
  color: white;
  margin-top: 250px;
  width: 100%;
  text-align: center;
  transform: translateY(-10%); /* 살짝 위로 이동 */
  max-width: 80%; /* 이미지가 화면에 꽉 차지 않도록 제한 */
  margin-bottom: 80px; /* 아래쪽에 여유 공간 추가 */

  & img {
    max-width: 100%; /* 부모인 Content의 너비에 맞춰 조정 */
    height: auto;
    margin-top: 0px;
    margin-bottom: 20px; /* 이미지 사이에 간격을 추가 */
  }

  @media (max-width: 800px) {
    margin-top: 150px;
    margin-bottom: 60px;
  }

  @media (max-width: 480px) {
    margin-top: 120px;
    margin-bottom: 40px;
  }
`;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 130vh;
  width: 100%;
  overflow: hidden;
`;

const StyledLabel = styled.div`
  position: relative;
  z-index: 2;
  max-width: 80%;
  width: 100%;
  margin-top: -70px;
  text-align: center;

  & .flexcontainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & .text {
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.4;
    opacity: 0;
    transition: opacity 0.6s, transform 0.6s;
    transform: translateY(20px);
  }

  & .visible {
    opacity: 1;
    transform: translateY(0);
  }

  & .text-wrapper {
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 18px;
    font-weight: 600;
  }
`;
