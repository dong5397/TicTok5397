import { useState } from "react";
import styled from "styled-components";

function ResponsiveLocationButton({ content, onClick, isActive }) {
  // 클릭 상태를 저장할 useState 훅을 사용합니다.
  const [clicked, setClicked] = useState(false);

  // 기존 크기 및 폰트 크기 설정
  const originalWidth = 176;
  const originalHeight = 68;
  const originalFontSize = 25;

  // 브라우저 크기가 줄어들 때의 크기 및 폰트 크기 설정
  const reducedWidth = 128;
  const reducedHeight = 48;
  const reducedFontSize = 20;

  // 가장 작은 화면 크기에서의 크기 및 폰트 크기 설정
  const smallestWidth = 100;
  const smallestHeight = 38;
  const smallestFontSize = 15;

  // 클릭 이벤트 처리 함수
  const handleClick = () => {
    setClicked(!clicked); // 클릭 상태를 반전시킵니다.
  };

  return (
    <LocationButton
      originalWidth={originalWidth}
      originalHeight={originalHeight}
      originalFontSize={originalFontSize}
      reducedWidth={reducedWidth}
      reducedHeight={reducedHeight}
      reducedFontSize={reducedFontSize}
      smallestWidth={smallestWidth}
      smallestHeight={smallestHeight}
      smallestFontSize={smallestFontSize}
      onClick={onClick}
      isActive={isActive}
    >
      <h2>{content}</h2>
    </LocationButton>
  );
}

const LocationButton = styled.button`
  width: 176px;
  height: 68px;
  border: 2px solid #fe2c55;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isActive }) => (isActive ? "#fe2c55" : "black")};
  cursor: pointer;

  h2 {
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 25px;
    font-weight: 600;
    color: #ffffff;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: ${({ reducedWidth }) => reducedWidth}px;
    height: ${({ reducedHeight }) => reducedHeight}px;
    h2 {
      font-size: ${({ reducedFontSize }) => reducedFontSize}px;
    }
  }

  @media (max-width: 425px) {
    width: ${({ smallestWidth }) => smallestWidth}px;
    height: ${({ smallestHeight }) => smallestHeight}px;
    h2 {
      font-size: ${({ smallestFontSize }) => smallestFontSize}px;
    }
  }
`;

export default ResponsiveLocationButton;
