import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";

// 파도타기 애니메이션 정의 (세로로 나타나기)
const waveAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 애니메이션 적용 여부를 동적으로 설정하는 스타일 컴포넌트
const Box = styled.div`
  width: 400px;
  height: 400px;
  margin: 10px;
  border-radius: 8px;
  background-color: ${(props) => props.color || "#3498db"};
  opacity: 0;
  transform: translateY(20px);
  ${(props) =>
    props.isVisible &&
    css`
      animation: ${waveAnimation} 0.3s ease forwards;
      animation-delay: ${props.delay}s;
    `}
`;

const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const DelayedBox = ({ delay, color }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return <Box ref={ref} delay={delay} color={color} isVisible={isVisible} />;
};

const TestBox = () => {
  return (
    <Container>
      <DelayedBox delay={0.1} color="#3498db" />
      <DelayedBox delay={0.3} color="#e74c3c" />
      <DelayedBox delay={0.5} color="#f1c40f" />
    </Container>
  );
};

export default TestBox;
