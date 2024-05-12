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
  justify-content: center;
  align-items: center;
  gap: 80px;

  @media (max-width: 768px) {
    gap: 60px;
  }

  @media (max-width: 480px) {
    gap: 40px;
  }
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
      width: 16px;
      height: 16px;
    }

    @media (max-width: 480px) {
      width: 14px;
      height: 14px;
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
    display: flex;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px) {
      font-size: 18px;
      gap: 15px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
      gap: 10px;
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
          <div className="text-wrapper">
            <img className="dot-img" src={Dot} alt="점" />
            애니메이션 박스 8
          </div>
          <div className="div">여기에 내용을 추가하세요.</div>
        </div>
      </AnimatedBox>
    </StyledBox2Container>
  );
}

export default StyleBox8;
