import styled from "styled-components";
import TicTokImage from "../../../images/Home/TicTok.png";
import AR from "../../../images/Apply/AR.png";
import Contents from "./Contents";
import Title from "./Title";

function Main() {
  return (
    <>
      <ApplyContainer>
        <Title ticTokImage={TicTokImage} arImage={AR} />
        <Contents />
      </ApplyContainer>
    </>
  );
}

export default Main;

const ApplyContainer = styled.div`
  position: relative; /* 컨텐츠를 백그라운드 위로 올리기 위해 상대 위치 설정 */
  z-index: 2;

  width: 100%;
  margin-top: 150px;
  text-align: center;
  transform: translateY(-10%); /* 살짝 위로 이동 */

  margin-bottom: 80px; /* 아래쪽에 여유 공간 추가 */

  & img {
    max-width: 100%; /* 부모인 Content의 너비에 맞춰 조정 */
    height: auto;
    margin-top: 0px;
    margin-bottom: 20px; /* 이미지 사이에 간격을 추가 */
  }

  @media (max-width: 800px) {
    margin-top: 150px;
    margin-bottom: 60px;
  }

  @media (max-width: 480px) {
    margin-top: 120px;
    margin-bottom: 40px;
  }
`;

const StyledLabel = styled.div`
  height: 173px;
  width: 100%;
`;
