import React from "react";
import styled from "styled-components";
import Img1 from "../../images/1.png";
import Img2 from "../../images/2.png";
import Img3 from "../../images/3.png";
import Img4 from "../../images/4.png";
import Img5 from "../../images/5.png";

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 50px;
  font-family: "GmarketSansMedium";
  color: #333;
  text-align: center; /* 내용을 센터로 정렬 */
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 50px;
`;

const SubHeading = styled.h2`
  margin-top: 100px;
  color: #333;
  font-size: 40px;
  font-family: "GmarketSansMedium";
`;

const Paragraph = styled.p`
  font-size: 25px;
  margin-bottom: 15px;
  line-height: 1.6;
  font-family: "GmarketSansMedium";
  font-weight: bold;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const ImgItem = styled.img`
  width: 450px;
  height: 350px;
  margin: 50px;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  border: 6px solid;
  border-radius: 10px;

  &:hover {
    transform: scale(1.1);
  }
`;

const TextBox = styled.div`
  width: 600px;
  border: 6px solid;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  padding: 50px;
  margin: 0 auto; /* 가운데 정렬 */
  &:hover {
    transform: scale(1.1);
  }
`;
const Home = () => {
  return (
    <Container>
      <Heading>2024 TikTok 대학생 AR필터 메이커톤</Heading>
      <Paragraph>
        <div>
          대학생 AR 특수 효과 산업 이해도 상승, AR 필터 제작 기술 습득, 취업
          옵션 확장 지원
        </div>
        <div>틱톡의 Effect House 홍보, AR 필터 크리에이터 영입 및 육성</div>
        <div>
          프로젝트 완료 후 지속적으로 틱톡 Effect House 프로그램 필터 크리에이터
          활동
        </div>
      </Paragraph>
      <SubHeading>활동내용</SubHeading>
      <Paragraph>
        - Effect House 교육 수강 후 툴을 활용하여 TikTok AR필터 제작 미션 수행
        <br />-{" "}
        <Link href="https://bit.ly/2023TikTokEH" target="_blank">
          AR필터란? Effect House 교육케이스 자세히 보기
        </Link>
        <ImgContainer>
          <ImgItem src={Img5} alt="AR 필터" />
          <ImgItem src={Img2} alt="AR 필터" />
          <ImgItem src={Img3} alt="AR 필터" />
          <ImgItem src={Img4} alt="AR 필터" />
        </ImgContainer>
      </Paragraph>
      <SubHeading>모집대상</SubHeading>
      <Paragraph>
        <TextBox>
          대상: 대학생을 포함하여 한국에 거주하는 만 18세부터 26세까지 누구나 -
          서울: 선착순 150명, 대전: 선착순 50명, 광주: 선착순 50명 총 참가자
          선착순 200명 - 참가방법: 개인 또는 2인팀(디자이너 1인, 개발자 1인) -
          추천 전공: 시각디자인학과, 컴퓨터디자인학과, 공업디자인학과,
          패션디자인학과, 웹디자인학과, 멀티미디어공학과, 컴퓨터공학과 등 (AR
          필터 분야에 관심 많은 다른 전공 대학생도 환영) - 필수 자격: 한국에
          거주하는 분. 국적 상관없음. 졸업생 & 대학원생도 상관없음. - 우대 사항:
          3D 작업이 가능한 분.
        </TextBox>
      </Paragraph>
      <SubHeading>등록신청</SubHeading>
      <Paragraph>
        - 등록기간: 5월 25일(목)부터 선착순 200명 모집시 까지
        <br />- 등록방법:{" "}
        <Link href="#">학회 홈페이지 진행행사 안내페이지</Link>에서 신청
        <br />- <strong>필수 정보:</strong> 학교, 학과, 이름, 연락처, 이메일,
        틱톡 아이디
        <br />- 정보 동의 필요
      </Paragraph>
      <SubHeading>오리엔테이션 및 교육</SubHeading>
      <Paragraph>
        - 오리엔테이션(1회) 및 교육(1회, 2시간)
        <TextBox>
          오리엔테이션 (서울 OR 대전 중 택 1) - 내용: OT 및 간단한 실습 - 서울:
          7월 6일 목요일, 중앙대학교 - 대전: 7월 11일 화요일, 목원대학교 - 광주:
          7월 중, 전남대학교
        </TextBox>
        <TextBox>
          교육 일정 (서울 OR 대전 중 택 1) - 내용: TikTok Effect House 활용법
          교육 - 서울: 8월 8일 화요일, 중앙대학교 - 대전: 8월 10일 목요일,
          목원대학교 - 광주: 8월 중, 전남대학교
        </TextBox>
        <TextBox>참석 시 노트북 필참</TextBox>
      </Paragraph>
    </Container>
  );
};

export default Home;
