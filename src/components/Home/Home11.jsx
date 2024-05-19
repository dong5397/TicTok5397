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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
`;

const DesktopImage = styled(Image)`
  max-width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileImage = styled(Image)`
  display: none; /* 데스크톱에서 숨기기 */

  @media (max-width: 768px) {
    display: block; /* 태블릿 및 모바일에서 보이기 */
    width: 100%; /* 태블릿 및 모바일에서 화면 전체 너비로 조정 */
  }
`;
