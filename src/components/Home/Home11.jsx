import styled from "styled-components";
import desktopImg from "../../../images/Home/desktop-background.png";
import mobileImg from "../../../images/Home/mobile-background.png";

function Home11() {
  return (
    <MainContainer>
      <DesktopImage src={desktopImg} alt="Desktop Background" />
      <MobileImage src={mobileImg} alt="Mobile Background" />
    </MainContainer>
  );
}

export default Home11;

const MainContainer = styled.div`
  width: 100%; /* 전체 너비로 설정 */
  display: flex;
  justify-content: center; /* 이미지가 가운데로 오도록 */
  align-items: center; /* 이미지가 수직 가운데로 오도록 */
  flex-direction: column; /* 이미지가 겹치지 않고 세로로 배치되도록 */
`;

const Image = styled.img`
  width: 100%;
  height: auto; /* 비율 유지 */
`;

const DesktopImage = styled(Image)`
  max-width: 1200px; /* 데스크톱에서 이미지를 너무 크게 하지 않기 위해 제한 */

  @media (max-width: 768px) {
    display: none; /* 태블릿 및 모바일에서 숨기기 */
  }
`;

const MobileImage = styled(Image)`
  display: none; /* 데스크톱에서 숨기기 */

  @media (max-width: 768px) {
    display: block; /* 태블릿 및 모바일에서 보이기 */
    width: 90%; /* 태블릿 크기에서 적절한 너비로 조정 */
  }

  @media (max-width: 480px) {
    width: 100%; /* 모바일에서 화면 전체 너비로 조정 */
  }
`;
