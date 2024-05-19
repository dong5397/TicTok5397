import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Home2Image from "../../../images/Home/Home2.png";
import TicTokImage from "../../../images/Home/TicTok.svg";
import MakertoneImage from "../../../images/Home/Home3.png";

function Home2() {
  const textRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, options);

    textRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      textRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <MainContainer>
      <StyledBox>
        <img className="mask-group" alt="Mask group" src={Home2Image} />
      </StyledBox>
      <ContentContainer>
        <Content>
          <div className="image-container">
            <img className="tiktok-image" alt="TicTok Logo" src={TicTokImage} />
          </div>
        </Content>
        <Content2>
          <div className="image-container">
            <img
              className="makertone-image"
              alt="Makertone"
              src={MakertoneImage}
            />
          </div>
        </Content2>
        <StyledLabel>
          <div className="flexcontainer">
            <p className="text" ref={(el) => (textRefs.current[0] = el)}>
              <span className="text-wrapper1">
                대학생 AR 특수 효과 산업 이해도 상승,&nbsp;
              </span>
              <span className="text-wrapper1-1">
                AR 필터 제작 기술 습득, 취업 옵션 확장 지원
              </span>
            </p>
            <p className="text" ref={(el) => (textRefs.current[1] = el)}>
              <span className="text-wrapper2">
                틱톡의 Effect House 홍보, AR 필터 크리에이터 영입 및 육성
              </span>
            </p>
            <p className="text" ref={(el) => (textRefs.current[2] = el)}>
              <span className="text-wrapper3">
                프로젝트 완료 후 지속적으로 틱톡 Effect House 프로그램{" "}
              </span>
              <span className="text-wrapper3-1"> 필터크리에이터 활동</span>
            </p>
          </div>
        </StyledLabel>
      </ContentContainer>
    </MainContainer>
  );
}

export default Home2;

const ContentContainer = styled.div`
  margin-top: 150px;
  @media (max-width: 780px) {
    margin-top: -100px;
  }
`;
const StyledBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  z-index: 0;
  @media (max-width: 780px) {
    margin-top: -25px;
  }
  & .mask-group {
    width: 100%;
    height: 100%;
    @media (max-width: 760px) {
      height: 80%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0)
    );
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
    z-index: 1;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  margin-bottom: 150px;
  text-align: center;

  max-width: 80%;
  margin-left: auto;
  margin-right: auto;

  .image-container {
    display: flex;
    justify-content: center;
    margin-bottom: -100px;
  }

  & img.tiktok-image {
    max-width: 100%;
    height: auto;
    margin-top: 40px;
  }

  @media (max-width: 760px) {
    margin-top: 60px;
    margin-bottom: 30px;

    .image-container {
      margin-bottom: -50px;
    }

    & img.tiktok-image {
      max-width: 80%;
      margin-bottom: -30px;
    }
  }
`;

const Content2 = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  margin-top: 150px;
  text-align: center;
  margin-bottom: 30px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;

  .image-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  & img.makertone-image {
    max-width: 100%;
    height: auto;
    margin-top: -30px;
    @media (max-width: 800px) {
      margin-top: 80px;
    }
  }

  @media (max-width: 800px) {
    margin-top: 10px;
    width: 100%;
  }

  @media (max-width: 760px) {
    margin-top: 30px;
    margin-bottom: 45px;

    .image-container {
      margin-bottom: -10px;
    }

    & img.makertone-image {
      max-width: 90%;
    }
  }
`;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 100px;
    margin-bottom: -320px;
  }
`;

const StyledLabel = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;

  & .flexcontainer {
    flex-direction: column;
    margin-bottom: -10px;

    @media (max-width: 768px) {
      text-align: center;
      gap: 8px;
      margin: 0;
    }

    @media (max-width: 760px) {
      gap: 6px;
      margin: 0;
    }
  }

  & .text {
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.4;
    opacity: 0;
    transition: opacity 0.6s, transform 0.6s;
    transform: translateY(20px);

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 1.2;
    }
  }

  & .visible {
    opacity: 1;
    transform: translateY(0);
  }

  & .text-wrapper1 {
    width: 800px;
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 18px;
    font-weight: 600;
    display: inline;
    text-align: center;
    max-width: 500px;
    @media (max-width: 768px) {
      display: inline-block;
      font-size: 14px;
      width: 90%;
      max-width: 300px;
      margin: 0 auto;
    }
  }
  & .text-wrapper1-1 {
    width: 800px;
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 18px;
    font-weight: 600;
    display: inline;
    text-align: center;

    @media (max-width: 768px) {
      display: inline-block;
      font-size: 14px;
      width: 90%;
      max-width: 300px;
      margin: 0 auto;
    }
  }
  & .text-wrapper2 {
    width: 800px;
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 18px;
    font-weight: 600;
    display: inline-block;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 14px;
      width: 90%;
      max-width: 400px;
      margin: 0 auto;
    }
  }
  & .text-wrapper3 {
    width: 800px;
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 18px;
    font-weight: 600;
    display: inline;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 14px;
      width: 90%;
      max-width: 500px;
      margin: 0 auto;
      display: inline-block;
    }
  }
  & .text-wrapper3-1 {
    width: 800px;
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 18px;
    font-weight: 600;
    display: inline;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 14px;
      width: 90%;
      max-width: 500px;
      margin: 0 auto;
      display: inline-block;
    }
  }
`;
