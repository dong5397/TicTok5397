import styled from "styled-components";
import img from "../../../images/Home/background.png";

function Home11() {
  return (
    <MainContainer>
      <StyledImage src={img} alt="Background" />
    </MainContainer>
  );
}

export default Home11;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; /* 이미지가 가운데로 오도록 */
  align-items: center; /* 이미지가 수직 가운데로 오도록 */
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 1200px; /* 데스크톱에서 이미지를 너무 크게 하지 않기 위해 제한 */
  height: auto; /* 비율 유지 */

  @media (max-width: 768px) {
    width: 90%; /* 태블릿 크기에서 적절한 너비로 조정 */
  }

  @media (max-width: 480px) {
    width: 100%; /* 모바일에서 화면 전체 너비로 조정 */
  }
`;
