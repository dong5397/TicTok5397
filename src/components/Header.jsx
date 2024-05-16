import React from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Logo from "../../images/Logo.png";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* 수평 스크롤바 방지 */
    box-sizing: border-box;
    font-family: "Inter-Bold", Helvetica, sans-serif;
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  color: white;
  transition: transform 0.3s;
  width: 100%;
  height: 60px; /* 고정된 높이 */
  background-color: rgba(0, 0, 0, 0.8); /* 반투명 배경 */
  z-index: 1000;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 100%;
`;

const LogoContainer = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 140px;

  @media (max-width: 768px) {
    width: 100px;
    margin-left: 15px;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  margin-right: 10px;
  gap: 30px;
  justify-content: space-between;

  @media (max-width: 768px) {
    gap: 20px;
    margin-right: 25px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 25px;
  font-weight: bold;
  transition: color 0.3s, transform 0.3s;
  font-family: "Inter-Bold", Helvetica;

  &:hover {
    color: #66e9ee;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

function Header() {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <InnerContainer>
          <LogoContainer to="/">
            <LogoImage src={Logo} alt="Logo" />
          </LogoContainer>
          <NavLinks>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/Apply">Apply</NavLink>
            <NavLink to="/Question">FAQ</NavLink>
          </NavLinks>
        </InnerContainer>
      </HeaderContainer>
    </>
  );
}

export default Header;
