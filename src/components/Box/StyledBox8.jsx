import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Dot from "../../../images/Home/Dot.png";
import StyleBox2 from "./StyleBox2";
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
  justify-content: center; /* 세로 중앙 정렬 추가 */
  align-items: center; /* 가로 중앙 정렬 추가 */
  gap: 80px;
`;

const StyledBox8 = styled.div`
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
    display: flex; /* 추가 */
    justify-content: center; /* 추가 */
    gap: 20px; /* 추가 */
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
    <StyledBox8 ref={ref} delay={delay} isVisible={isVisible}>
      {children}
    </StyledBox8>
  );
}

function StyleBox8() {
  return (
    <StyledBox2Container>
      <AnimatedBox delay={0}>
        <div className="group">
          <div className="div"></div>
        </div>
      </AnimatedBox>
    </StyledBox2Container>
  );
}

export default StyleBox8;
