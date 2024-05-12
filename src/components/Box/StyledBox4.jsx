import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Dot from "../../../images/Home/Dot.png";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledBox2Container = styled.div`
  margin-top: 30px;
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 80px;
`;

const StyledBox4 = styled.div`
  height: auto;
  position: relative;
  width: 800px;
  margin-left: 60px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(-20px)"};
  transition: all 0.8s ease-in-out ${(props) => props.delay}s;

  & .group {
    position: relative;
    width: 800px;
  }

  & .text-wrapper {
    color: #ffffff;
    font-family: "Inter-Bold", Helvetica;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-left: 8px; /* 왼쪽 마진 추가 */
  }

  & .dot-img {
    margin-right: 8px;
  }

  & .div {
    color: #ffffff;
    font-family: "Inter-Medium", Helvetica;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.5;
    position: relative;
    margin-left: 20px; /* 왼쪽 마진 추가 */
  }
`;

function AnimatedBox({ delay, children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <StyledBox4 ref={ref} delay={delay} isVisible={isVisible}>
      {children}
    </StyledBox4>
  );
}

function StyleBox4() {
  return (
    <StyledBox2Container>
      <AnimatedBox delay={0}>
        <div className="group">
          <div className="text-wrapper">
            <img className="dot-img" src={Dot} alt="점" />
            오리엔테이션
          </div>
          <div className="div">
            내용: OT 및 간단한 실습
            <br />
            서울 1차 : 7월 2일 화요일, 중앙대학교
            <br />
            서울 2차 : 7월 3일 수요일, 한신대학교
            <br />
            대전 : 7월 4일 목요일, 목원대학교
            <br />
            광주 : 7월 5일 금요일
          </div>
        </div>
      </AnimatedBox>

      <AnimatedBox delay={0.1}>
        <div className="group">
          <div className="text-wrapper">
            <img className="dot-img" src={Dot} alt="점" />
            등록방법
          </div>
          <div className="div">
            <h3>교육일정</h3>
            내용 : TikTok Effect House 활용법 및 심화교육
            <br />
            서울 1차 : 8월 5일 화요일, 중앙대학교
            <br />
            서울 2차 : 8월 6일 수요일, 한신대학교
            <br />
            대전 : 8월 7일 목요일, 목원대학교
            <br />
            광주 : 8월 8일 금요일
          </div>
        </div>
      </AnimatedBox>
    </StyledBox2Container>
  );
}

export default StyleBox4;
