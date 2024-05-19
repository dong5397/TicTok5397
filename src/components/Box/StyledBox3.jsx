import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Dot from "../../../images/Home/Dot.png";
import Label3 from "../Lable/Label3";

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
  margin-top: 50px;
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 80px;

  @media (max-width: 768px) {
    gap: 60px;
  }

  @media (max-width: 480px) {
    gap: 40px;
  }
`;

const StyledBox3 = styled.div`
  height: auto;
  position: relative;
  width: 800px;
  margin-left: 90px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(-20px)"};
  transition: all 0.8s ease-in-out ${(props) => props.delay}s;

  & .group {
    position: relative;
    width: 800px;

    @media (max-width: 768px) {
      width: 100%;
    }

    @media (max-width: 480px) {
      width: 100%;
    }
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

    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  & .dot-img {
    margin-right: 8px;

    @media (max-width: 768px) {
      width: 8px;
      height: 8px;
      margin-left: 10px;
    }

    @media (max-width: 480px) {
      width: 8px;
      height: 8px;
      margin-left: 10px;
    }
  }

  & .div {
    color: #ffffff;
    font-family: "Inter-Medium", Helvetica;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.5;
    position: relative;
    margin-left: 15px;

    @media (max-width: 768px) {
      font-size: 18px;
      margin-left: 28px;
      margin-right: 20px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
      margin-left: 24px;
      margin-right: 20px;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-left: 0;
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
    <StyledBox3 ref={ref} delay={delay} isVisible={isVisible}>
      {children}
    </StyledBox3>
  );
}

function StyleBox3() {
  return (
    <StyledBox2Container>
      <AnimatedBox delay={0}>
        <div className="group">
          <div className="text-wrapper">
            <img className="dot-img" src={Dot} alt="점" />
            등록기간
          </div>
          <div className="div">5월 6일(월)부터 6월 16일(일)까지</div>
        </div>
      </AnimatedBox>
      <AnimatedBox>
        <div className="group">
          <div className="text-wrapper">
            <img className="dot-img" src={Dot} alt="점" />
            등록방법
          </div>
          <div className="div">학회 홈페이지 진행행사 안내페이지</div>
        </div>
      </AnimatedBox>
    </StyledBox2Container>
  );
}

export default StyleBox3;
