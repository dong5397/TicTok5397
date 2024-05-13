import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import box1 from "../../../images/Home/Box/1.png";
import box2 from "../../../images/Home/Box/2.png";
import box3 from "../../../images/Home/Box/3.png";
import box4 from "../../../images/Home/Box/4.png";
import box5 from "../../../images/Home/Box/5.png";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledBox7Container = styled.div`
  position: relative;
  width: 792px;
  height: 398px;

  @media (max-width: 768px) {
    width: 100%;

    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

const StyledGroup = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
  }
`;

const StyledRectangle = styled.div`
  -webkit-backdrop-filter: blur(4px) brightness(100%);
  backdrop-filter: blur(4px) brightness(100%);
  background-color: #ffffffb2;
  border-radius: 20px;
  width: 250px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: all 0.8s ease-in-out ${(props) => props.delay}s;
  cursor: pointer;
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 50%;
    height: 180px;
  }

  @media (max-width: 480px) {
    width: 50%;
    height: 150px;
  }
`;

const StyledDiv = styled.div`
  -webkit-backdrop-filter: blur(4px) brightness(100%);
  backdrop-filter: blur(4px) brightness(100%);
  background-color: #ffffffb2;
  border-radius: 20px;
  width: 380px;
  height: 175px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: all 0.8s ease-in-out ${(props) => props.delay}s;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 50%;
    height: 150px;
  }

  @media (max-width: 480px) {
    width: 50%;
    height: 120px;
  }
`;

function AnimatedRectangle({ delay, children, backgroundImage }) {
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
    <StyledRectangle
      ref={ref}
      delay={delay}
      isVisible={isVisible}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {children}
    </StyledRectangle>
  );
}

function AnimatedDiv({ delay, children, backgroundImage }) {
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
    <StyledDiv
      ref={ref}
      delay={delay}
      isVisible={isVisible}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {children}
    </StyledDiv>
  );
}

export const StyledBox7 = () => {
  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setKey(Date.now());
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <StyledBox7Container key={key}>
      <StyledGroup>
        {/* 첫 번째 줄에 3개의 박스 */}
        <RowContainer>
          <AnimatedRectangle
            delay="0.1s"
            backgroundImage={box1}
          ></AnimatedRectangle>
          <AnimatedRectangle
            delay="0.2s"
            backgroundImage={box2}
          ></AnimatedRectangle>
          <AnimatedRectangle
            delay="0.3s"
            backgroundImage={box3}
          ></AnimatedRectangle>
        </RowContainer>
        {/* 두 번째 줄에 2개의 박스 */}
        <RowContainer>
          <AnimatedDiv delay="0.2s" backgroundImage={box4}></AnimatedDiv>
          <AnimatedDiv delay="0.3s" backgroundImage={box5}></AnimatedDiv>
        </RowContainer>
      </StyledGroup>
    </StyledBox7Container>
  );
};

export default StyledBox7;
