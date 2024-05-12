import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../images/Logo.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: white;
  transition: transform 0.3s;
  width: 100%;
  max-width: 1280px;
  height: 40px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    height: auto;
    padding: 5px;
  }
`;

const LogoContainer = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 24px;
  display: flex;
  gap: 20px;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 20px;
    gap: 15px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    gap: 10px;
  }
`;

const LogoImage = styled.img`
  width: 100px;

  @media (max-width: 768px) {
    width: 80px;
  }

  @media (max-width: 480px) {
    width: 60px;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
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
    color: #66e9ee; /* 원하는 색상으로 변경하세요 */
    transform: scale(1.1);
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
    <HeaderContainer>
      <LogoContainer to="/">
        <LogoImage src={Logo} alt="Logo" />
      </LogoContainer>
      <NavLinks>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/Intord">RECRUIT</NavLink>
        <NavLink to="/Submit">DETAILS</NavLink>
        <NavLink to="/Question">FAQ</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
}

export default Header;
