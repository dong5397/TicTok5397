import React from "react";
import styled from "styled-components";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ImageData from "../components/ImageData";
import ImageData2 from "../components/ImageData2";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
  font-family: "GmarketSansMedium";
  color: white;
  background-color: #212121;

  margin-top: 100px;
`;

const Heading = styled.h1`
  margin-bottom: 20px;
  color: white;
  font-size: 50px;
`;

const SubHeading = styled.h2`
  margin-top: 100px;
  color: white;
  font-size: 40px;
  font-family: "GmarketSansMedium";
`;

const Paragraph = styled.div`
  font-size: 25px;
  margin-bottom: 15px;
  line-height: 1.6;
  font-family: "GmarketSansMedium";
  font-weight: bold;
  margin-bottom: 200px;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const TextBox = styled.div`
  width: 700px;
  border: 6px solid;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  padding: 50px;

  margin: 0 auto 20px;
  &:hover {
    transform: scale(1.1);
  }
`;

const H3 = styled.div`
  font-size: 25px;
`;

const Button = styled.button`
  background-color: #3fc758;
  color: white;
  padding: 15px 30px; /* 버튼 크기 조정 */
  border: none;
  border-radius: 10px; /* 버튼 둥글게 */
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s ease;
  border: 2px solid #000000; // 테두리 추가
  margin-top: 40px; /* 버튼 위 여백 추가 */

  &:hover {
    background-color: #81a01b;
  }
`;

const StyledCarousel = styled(Carousel)`
  width: 800px; // Carousel의 가로 크기 조정
  height: 400px; // Carousel의 세로 크기 조정
  border: 5px solid #000000; // 테두리 추가
  border-radius: 20px; // 모서리 둥글게 만들기
  margin: 50px auto; // 가운데 정렬
  .carousel .slide img {
    max-height: 400px; // 이미지 높이 조정
    border-radius: 15px; // 이미지 모서리 둥글게 만들기
  }
`;

const renderSlides = () => {
  return ImageData.map((image) => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
    </div>
  ));
};
const renderSlides2 = () => {
  return ImageData2.map((image) => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
    </div>
  ));
};

const Home = () => {
  return (
    <Container>
      <Heading>2024 TikTok 대학생 AR필터 메이커톤</Heading>
      <Paragraph>
        <H3>
          대학생 AR 특수 효과 산업 이해도 상승, AR 필터 제작 기술 습득, 취업
          옵션 확장 지원
        </H3>
        <H3>틱톡의 Effect House 홍보, AR 필터 크리에이터 영입 및 육성</H3>
        <H3>
          프로젝트 완료 후 지속적으로 틱톡 Effect House 프로그램 필터 크리에이터
          활동
        </H3>
      </Paragraph>
      <SubHeading>활동내용</SubHeading>
      <Paragraph>
        <H3>
          - Effect House 교육 수강 후 툴을 활용하여 TikTok AR필터 제작 미션 수행
          -{" "}
          <Link href="https://bit.ly/2023TikTokEH" target="_blank">
            <H3>AR필터란? Effect House 교육케이스 자세히 보기</H3>
          </Link>
        </H3>
        <StyledCarousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
        >
          {renderSlides()}
        </StyledCarousel>
      </Paragraph>
      <SubHeading>기대효과</SubHeading>
      <Paragraph>
        <H3>
          - Effect House 교육 수강 후 툴을 활용하여 TikTok AR필터 제작 미션 수행
          -{" "}
          <Link href="https://bit.ly/2023TikTokEH" target="_blank">
            <H3>AR필터란? Effect House 교육케이스 자세히 보기</H3>
          </Link>
        </H3>
        <StyledCarousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
        >
          {renderSlides2()}
        </StyledCarousel>
      </Paragraph>
      <SubHeading>모집대상</SubHeading>
      <Paragraph>
        <TextBox>
          <H3>
            대상: 대학생을 포함하여 한국에 거주하는 만 18세부터 26세까지 누구나
          </H3>
          <H3>
            -서울: 선착순 150명, 대전: 선착순 50명, 광주: 선착순 50명 총 참가자
            선착순 200명
          </H3>
          <H3>- 참가방법: 개인 또는 2인팀(디자이너 1인, 개발자 1인)</H3>
          <H3>-추천전공: 시각디자인학과, 컴퓨터디자인학과, 공업디자인학과,</H3>
          <H3>
            패션디자인학과, 웹디자인학과, 멀티미디어공학과, 컴퓨터공학과 등
          </H3>
          <H3>(AR필터 분야에 관심 많은 다른 전공 대학생도 환영)</H3>
          <H3>
            - 필수자격: 한국에거주하는 분. 국적 상관없음. 졸업생 & 대학원생도
            상관없음.
          </H3>
          <H3>- 우대 사항:3D 작업이 가능한 분.</H3>
        </TextBox>
      </Paragraph>
      <SubHeading>등록신청</SubHeading>
      <Paragraph>
        <H3>- 등록기간: 5월 25일(목)부터 선착순 200명 모집시 까지</H3>
        <H3>- 등록방법: </H3>
        <Link href="#">학회 홈페이지 진행행사 안내페이지</Link>에서 신청
        <H3>- 필수 정보: 학교, 학과, 이름, 연락처, 이메일, 틱톡 아이디</H3>
        <H3>- 정보 동의 필요</H3>
        <br />
        <br />
        <Button as={Link} href="/Submit">
          참가하러가기
        </Button>
      </Paragraph>
      <SubHeading>오리엔테이션 및 교육</SubHeading>
      <Paragraph>
        - 오리엔테이션(1회) 및 교육(1회, 2시간)
        <TextBox>
          <H3>오리엔테이션 (서울 OR 대전 중 택 1) </H3>
          <H3>- 내용: OT 및 간단한 실습</H3>
          <H3>
            - 서울: 7월 6일 목요일, 중앙대학교 - 대전: 7월 11일{" "}
            <H3>화요일, 목원대학교 - 광주: 7월 중, 전남대학교</H3>
          </H3>
        </TextBox>
        <TextBox>
          <H3>교육 일정 (서울 OR 대전 중 택 1)</H3>
          <H3>
            - 내용: TikTok Effect House 활용법 교육 - 서울: 8월 8일 화요일,
            <H3>
              중앙대학교 - 대전: 8월 10일 목요일,{" "}
              <H3>목원대학교 - 광주: 8월 중,</H3>
            </H3>
            <H3> 전남대학교</H3>
          </H3>
        </TextBox>
        <TextBox>참석 시 노트북 필참</TextBox>
      </Paragraph>
    </Container>
  );
};

export default Home;
