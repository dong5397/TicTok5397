import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../images/Logo.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;

  color: white;
  transition: transform 0.3s;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* 반투명 배경 */
  z-index: 1000;
`;

const InnerContainer = styled.div`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LogoContainer = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 24px;
  display: flex;
`;

const LogoImage = styled.img`
  width: 140px;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: space-between;
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
    <HeaderContainer>
      <InnerContainer>
        <LogoContainer to="/">
          <LogoImage src={Logo} alt="Logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/Intord">RECRUIT</NavLink>
          <NavLink to="/Submit">DETAILS</NavLink>
          <NavLink to="/Question">FAQ</NavLink>
        </NavLinks>
      </InnerContainer>
    </HeaderContainer>
  );
}

export default Header;
