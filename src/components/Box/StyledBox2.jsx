import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import Dot from "../../../images/Home/Dot.png";
import Label2 from "../Lable/Label2";

const StyledBox2Container = styled.div`
  margin-top: 30px;
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 80px;

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
  }
`;

const StyledBox2 = styled.div`
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
  & .elgbl {
    display: flex;

    @media (max-width: 768px) {
      font-size: 13px;
      margin-right: 20px;
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
      font-size: 13px;
      margin-left: 24px;
      margin-right: 20px;
    }
  }

  @media (max-width: 768px) {
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
    <StyledBox2 ref={ref} delay={delay} isVisible={isVisible}>
      {children}
    </StyledBox2>
  );
}

function StyleBox2() {
  return (
    <StyledBox2Container>
      <AnimatedBox delay={0.1}>
        <div className="group">
          <div className="text-wrapper">
            <img className="dot-img" src={Dot} alt="점" />
            대상
          </div>
          <div className="div">
            <div className="elgbl"> 한국에 거주하시는 분.</div>{" "}
            <div className="elgbl">국적 상관 없음.</div>{" "}
            <div className="elgbl">졸업생도 상관없음.</div>
            <Label2 />
          </div>
        </div>
      </AnimatedBox>
      <AnimatedBox delay={0.1}>
        <div className="group">
          <div className="text-wrapper">
            <img className="dot-img" src={Dot} alt="점" />
            참가 방법
          </div>
          <div className="div">개인 또는 2인팀(디자이너 1인, 개발자 1인)</div>
        </div>
      </AnimatedBox>
      <AnimatedBox delay={0.2}>
        <div className="group">
          <div className="text-wrapper">
            <img className="dot-img" src={Dot} alt="점" />
            추천 전공
          </div>
          <div className="div">
            <div className="elgbl">
              디지털콘텐츠학과, 예술공학과, 시각디자인학과,
            </div>
            <div className="elgbl">
              컴퓨터디자인학과,공업디자인학과, 패션디자인학과,
            </div>

            <div className="elgbl">
              {" "}
              웹디자인학과, 멀티미디어공학과, 컴퓨터공학과 등
            </div>
            <div className="elgbl">
              (AR 필터 분야에 관심 많은 다른 전공 대학생도 환영)
            </div>
          </div>
        </div>
      </AnimatedBox>
      <AnimatedBox delay={0.2}>
        <div className="group">
          <div className="text-wrapper">
            <img className="dot-img" src={Dot} alt="점" />
            필수 자격
          </div>
          <div className="div">
            한국에 거주하시는 분. 국적 상관없음. 졸업생도 상관없음.
          </div>
        </div>
      </AnimatedBox>
      <AnimatedBox delay={0.3}>
        <div className="group">
          <div className="text-wrapper">
            <img className="dot-img" src={Dot} alt="점" />
            우대 사항
          </div>
          <div className="div">3D 작업이 가능한 분.</div>
        </div>
      </AnimatedBox>
    </StyledBox2Container>
  );
}

export default StyleBox2;
