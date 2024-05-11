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
  width: 300px;
  height: 300px;
  margin: 10px;
  border-radius: 8px;
  background-color: ${(props) => props.color || "#3498db"};
  opacity: 0;
  transform: translateY(20px);
  ${(props) =>
    props.isVisible &&
    css`
      animation: ${waveAnimation} 0.5s ease forwards;
      animation-delay: ${props.delay}s;
    `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const DelayedBox = ({ delay, color, isVisible }) => {
  return <Box delay={delay} color={color} isVisible={isVisible} />;
};

const TestBox = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Container ref={containerRef}>
      <DelayedBox delay={0.1} color="#3498db" isVisible={isVisible} />
      <DelayedBox delay={0.3} color="#e74c3c" isVisible={isVisible} />
      <DelayedBox delay={0.5} color="#f1c40f" isVisible={isVisible} />
    </Container>
  );
};

export default TestBox;
